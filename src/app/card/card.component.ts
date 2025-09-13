import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() startDate: string = '';
  @Input() endDate: string = '';
  @Input() title: string = '';
  @Input() institution: string = '';
  @Input() location: string = '';
  @Input() shortDescription: string = '';
  @Input() detailedDescription: string = '';
  @Input() skills: string[] = [];
  @Input() publicationDate: string = '';
  @Input() conferenceLink: string = '';
  @Input() paperLink: string = '';
  @Input() authors: string = '';
  @Input() publisher: string = '';
  @Input() status: string = '';
  @Input() projectLink: string = '';
}
