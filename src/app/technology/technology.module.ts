import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {JsonpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {TechnologyComponent} from './technology.component';
import {PhpComponent} from './php/php.component';
import {CComponent} from './c/c.component';
import {HtmlComponent} from './html/html.component';
import {DotnetComponent} from './dotnet/dotnet.component';
import {JavaComponent} from './java/java.component';
import {NodejsComponent} from './nodejs/nodejs.component';



@NgModule({
  imports: [
   CommonModule,
   RouterModule.forChild(TechnologyRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
  ],
  declarations: [
    TechnologyComponent,
    PhpComponent,
    CComponent,
    HtmlComponent,
    DotnetComponent,
    JavaComponent,
    NodejsComponent
  ]
})

export class TechnologyModule {}
