import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {GiphySearchComponent} from './giphy-search.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'giphy-search',
        component: GiphySearchComponent
      }
    ])
  ],
  exports: [],
  declarations: [GiphySearchComponent],
  providers: [],
})
export class GiphySearchModule {
}
