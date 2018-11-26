import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {CuComponent} from './article/cu/cu.component';
import {RComponent} from './article/r/r.component';

export const appRoutes: Routes = [
  {path: '', component: ArticleComponent},
  {path: 'create', component: CuComponent},
  {path: 'show', component: RComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
