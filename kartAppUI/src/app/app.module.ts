import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { EmbedVideo } from 'ngx-embed-video';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  imports: [
    BrowserModule,
    //PdfViewerModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
    
    EmbedVideo.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5001'],
        blacklistedRoutes: ['localhost:5001/api/auth']
      }
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
