import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[disableToggle]',
})
export class ComponentDisableEffectDirective {

  @Input() disableOpacity: number = 0.6;

  @Input() set disableToggle(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', this.disableOpacity);
      this.renderer.setStyle(this.elementRef.nativeElement, 'user-select', 'none');
      this.renderer.setStyle(this.elementRef.nativeElement, 'pointer-events', 'none');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', null);
      this.renderer.setStyle(this.elementRef.nativeElement, 'user-select', null);
      this.renderer.setStyle(this.elementRef.nativeElement, 'pointer-events', null);
    }
  };

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }
}
