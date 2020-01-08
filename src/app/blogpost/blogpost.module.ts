import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { BlogpostFeatureComponent } from './blogpost-feature/blogpost-feature.component';
import { BlogpostDetailsComponent } from './blogpost-details/blogpost-details.component';
import { BlogpostCategoriesComponent } from './blogpost-categories/blogpost-categories.component';

@NgModule({
  declarations: [BlogpostListComponent, BlogpostRecentComponent, BlogpostFeatureComponent, BlogpostDetailsComponent, BlogpostCategoriesComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],

  exports: [
    BlogpostFeatureComponent 
  ]

})
export class BlogpostModule { }
