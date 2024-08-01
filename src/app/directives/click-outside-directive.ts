import { Directive, ElementRef, EventEmitter, HostListener, Input, Output} from "@angular/core";

@Directive({
    selector: '[clickOutside]',
})
export class ClickOutsideDirective {
    @Output() public clickOutside = new EventEmitter();
    @Input() elementId: string = ""

    constructor(private _elementRef: ElementRef) {

    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: { id: string; }) {
        if (targetElement.id === this.elementId) { return; }
        const isClickedOutside = this._elementRef.nativeElement.contains(targetElement);
        if (!isClickedOutside) {
            this.clickOutside.emit(null)
        }
    }
}
