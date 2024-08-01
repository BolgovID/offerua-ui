import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopicDto, TopicList } from '../../../../services/questions/questions.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'offer-topic-autocomplete',
  templateUrl: './topic-autocomplete.component.html',
  styleUrl: './topic-autocomplete.component.scss'
})
export class TopicAutocompleteComponent implements OnInit {
  @Input() topics!: TopicList
  @Output() selected = new EventEmitter<TopicDto>();

  showDropDown = false
  public dropdownForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dropdownForm = this.formBuilder.group({ search: null })
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown
  }

  getSearchValue() {
    return this.dropdownForm.value.search
  }

  selectValue(selected: TopicDto) {
    this.dropdownForm.patchValue({ 'search': selected.name })
    this.showDropDown = false;
    this.selected.emit(selected)
  }

  onTyping(event: any) {
    const text = event.target.value
    this.topics.filter(topic => this.topics.indexOf(topic) !==-1)
    this.selected.emit({ id: '', name: text });
  }

}
