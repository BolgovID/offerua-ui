import { NgModule } from '@angular/core';
import {ComponentDisableEffectDirective} from "./component-disabled-effect.directive";
import {ClickOutsideDirective} from "./click-outside-directive";

const directives = [
  ComponentDisableEffectDirective,
  ClickOutsideDirective
];

@NgModule({
  declarations: directives,
  exports: directives
})
export class DirectivesModule { }
