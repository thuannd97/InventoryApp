import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { youTubeSearchInjectables } from '../you-tube-search.injectables';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    youTubeSearchInjectables
  ]
})
export class HttpAppModule { }
