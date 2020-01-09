using System;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using kartApp.API.Dto;
using kartApp.API.Model;
using kartApp.API.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;

namespace kartApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProjectController : ControllerBase
    {
        private IProjectRespository _repo;
        private IConfiguration _config;
        public ProjectController(IProjectRespository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpPost("add")]
        public async Task<IActionResult> Project(ProjectDto obj)
        {
            var p = new Project();
            p.ApplicationName = obj.ApplicationName;
            p.Description = obj.FunctionalityInBrief;
            p.Services = obj.Servicesprovided;
            p.Technology = obj.Technology;
            p.ValueChainArea = obj.ValueChainArea;
            _repo.Add(p);
            var data = await _repo.SaveAll();
            return StatusCode(201);
        }

        [HttpGet]
        public async Task<IActionResult> Projects()
        {
            var data = await _repo.GetProjects();
            return Ok(data);

        }
        [HttpPost("upload/{id}"), DisableRequestSizeLimit]
        public async Task<IActionResult> Upload(int id)
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("wwwroot", "uploadedDocument");
                System.IO.Directory.CreateDirectory(folderName);
                //folderName.Directory.Create();
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    await UpdatePhotoUrl(id, dbPath);
                    return Ok(dbPath);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("{id}")]

        public async Task<IActionResult> UpdatePhotoUrl(int id, string path)
        {
            var projectData = await _repo.GetProject(id);

            projectData.FileURL = path;

            //_repo.Add(projectData);
            var data = await _repo.SaveAll();
            return StatusCode(201);
        }
        [HttpGet("download/{id}")]
        public async Task<FileStreamResult> Download(int id)
        {
            var projectData = await _repo.GetProject(id);
           // FileStream(projectData?.FileURL, FileMode.Open, FileAccess.Read);
            FileStream fs = new FileStream(projectData?.FileURL, FileMode.Open, FileAccess.Read);
           // initialize the value of filename 
             string fileName = null; 
             var contentType = "";
             fileName = Path.GetFileName(projectData?.FileURL); 
             new FileExtensionContentTypeProvider().TryGetContentType(fileName, out contentType);
            return new FileStreamResult(fs, contentType) {FileDownloadName = fileName};
        }

    }

}