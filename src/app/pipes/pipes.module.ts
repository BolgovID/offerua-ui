import { NgModule } from '@angular/core';
import { SearchFilterPipe } from './search-filter-pipe';

const pipes = [
  SearchFilterPipe
];

@NgModule({
  declarations: pipes,
  exports: pipes
})
export class PipesModule { }
