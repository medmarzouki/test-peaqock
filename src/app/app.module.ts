import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule} from './app.routing.module';
import {CuComponent} from './article/cu/cu.component';
import {RComponent} from './article/r/r.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CuComponent,
    RComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
