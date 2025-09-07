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
  @Input() shortDescription: string = '';
  @Input() skills: string[] = [];
}
