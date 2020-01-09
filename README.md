Basic change to run App
Path(kartApp\kartApp.Api) -> Run command (dotnet ef migrations add InitialCreation)

-> dotnet ef database update

-> dotnet run

Path(kartApp\kartAppUI) -> Run command (npm i)

-> ng serve

-------------------------------------------------------------
Running app in prod mode
Path(kartApp\kartAppUI) -> ng build --prod

Path(kartApp\kartApp.Api) -> dotnet run
