import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/1header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/2banner/banner.component';
import { EstudiosComponent } from './components/5estudios/estudios.component';
import { SkillsComponent } from './components/6skills/skills.component';
import { ExperienciaComponent } from './components/4experiencia/experiencia.component';
import { ProyectosComponent } from './components/7proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { SobreMiComponent } from './components/3sobre-mi/sobre-mi.component';
import { FooterComponent } from './components/8footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    EstudiosComponent,
    SkillsComponent,
    ExperienciaComponent,
    ProyectosComponent,
    LoginComponent,
    SobreMiComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
