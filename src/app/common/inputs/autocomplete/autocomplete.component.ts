import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'offer-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomAutocompleteComponent implements OnInit {

  @Input() options: any[] = [];
  @Input() filterBy: string;

  @Output() typing = new EventEmitter<string>();
  @Output() select = new EventEmitter<string>();

  filteredOptions: any[] = [];

  ngOnInit() {
    this.filteredOptions = this.options;
  }

  onSelect(data: any) {
    const value = data.option.value as string;

    this.select.emit(value)
  }

  displayFn(option: any): string {
    return option && option['name'] ? option['name'] : '';
  }

  onTyping(event: any) {
    const text = event.target.value.toLowerCase();
    this.filteredOptions = this.options.filter(option => option[this.filterBy].toLowerCase().includes(text));

    this.typing.emit(text);
  }
}
