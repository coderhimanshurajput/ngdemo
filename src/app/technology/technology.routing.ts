import {Routes} from '@angular/router';

import {CComponent} from './c/c.component';
import {CssComponent} from './css/css.component';
import {DotnetComponent} from './dotnet/dotnet.component';
import {JavaComponent} from './java/java.component';
import {NodejsComponent} from './nodejs/nodejs.component';
import {PhpComponent} from './php/php.component';
import {HtmlComponent} from './html/html.component';
import {allNgComponent} from 'codelyzer/walkerFactory/walkerFactory';

export const TechnologyRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'c',
        component: CComponent,
        data: {
          titile: 'C',
          urls: [{title: 'Technology', url: '/technology'}, {title: ngComponent}, {title: 'C'}]
        }
      },
      {
        path: 'css',
        component: CssComponent,
        data: {
          titile: 'CSS',
          urls: [{title: 'CSS' , url: '/technology'}, {title: ngComponent}, { titile: 'CSS'}]
        }
      }


    ]

  }]
