import { Component, OnInit } from '@angular/core';
import { TechnologyService as TechService } from '../../services/topics/technology.service';
import { TechDtoList } from '../../services/topics/technology.interface';

@Component({
  selector: 'offer-technologies',
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.scss',
})
export class TechnologyComponent implements OnInit {
  protected techList: TechDtoList;

  constructor(
    private techService: TechService,
  ) { }

  ngOnInit(): void {
    this.techService.getTechnologies().subscribe({
      next: (response) => {
        this.techList = response
      }
    });
  }
}
