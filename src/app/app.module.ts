import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';
import { PhpComponent } from './technology/php/php.component';
import { JavaComponent } from './technology/java/java.component';
import { DotnetComponent } from './technology/dotnet/dotnet.component';
import { CComponent } from './technology/c/c.component';
import { NodejsComponent } from './technology/nodejs/nodejs.component';
import { HtmlComponent } from './technology/html/html.component';
import { CssComponent } from './technology/css/css.component';
import { Route } from '@angular/compiler/src/core';


// <<<<<<<<<<<<<<< routing page Link >>>>>>

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'technology', component: TechnologyComponent},
  {path: 'contact', component: ContactComponent},
];


// <<<<<<<<<<<<<<<<<<<< @ngModules Create >>>>>>>>>>>>>>>>>>>>
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TechnologyComponent,
    ContactComponent,
    PhpComponent,
    JavaComponent,
    DotnetComponent,
    CComponent,
    NodejsComponent,
    HtmlComponent,
    CssComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
