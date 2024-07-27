import { NgModule } from '@angular/core';
import {ComponentDisableEffectDirective} from "./component-disabled-effect.directive";

const directives = [
  ComponentDisableEffectDirective,
];

@NgModule({
  declarations: directives,
  exports: directives
})
export class DirectivesModule { }
