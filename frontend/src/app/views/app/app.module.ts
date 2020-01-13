import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from '../../shared/graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from "ngx-markdown";

import { RouterModule, Routes } from "@angular/router";

import { NavComponent } from "../../shared/ui/nav/nav.component";
import { ArticlesComponent } from "../../shared/ui/articles/articles.component";
import { ArticleComponent } from "../../shared/ui/article/article.component";
import { CategoryComponent } from "../../shared/ui/category/category.component";

const appRoutes: Routes = [
  { path: "", component: ArticlesComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "category/:id", component: CategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
