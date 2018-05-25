import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TechnologyComponent} from './technology.component';
import {PhpComponent} from './php/php.component';
import {CComponent} from './c/c.component';
import {HtmlComponent} from './html/html.component';
import {DotnetComponent} from './dotnet/dotnet.component';
import {JavaComponent} from './java/java.component';
import {NodejsComponent} from './nodejs/nodejs.component';

const routes: Routes = [
 
  { path: 'technology/php', component: PhpComponent },
  {path: 'technology/java', component: JavaComponent},
];
