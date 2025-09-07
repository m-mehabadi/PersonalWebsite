import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PersonalWebsite';
  selectedCategory: string = 'education';
  mainCategories = ['education', 'professional experiences', 'publications'];
  secondaryCategories = ['university experiences', 'hubby projects'];
  categories = [...this.mainCategories, ...this.secondaryCategories];

  projects = [
    {
      startDate: '2020',
      endDate: '2024',
      title: 'PhD in Computer Science',
      shortDescription: 'Did my PhD at University of Toronto',
      skills: ['Angular', 'TypeScript', 'SCSS'],
      categories: ['education'],
    },
    {
      startDate: '2018',
      endDate: '2020',
      title: 'Software Engineer at Google',
      shortDescription: 'Worked on the Google Search team.',
      skills: ['C++', 'Python'],
      categories: ['professional experiences'],
    },
    {
      startDate: '2023',
      endDate: 'Present',
      title: 'This website',
      shortDescription:
        'A personal website to showcase my skills and projects.',
      skills: ['Angular', 'TypeScript', 'SCSS'],
      categories: ['hubby projects'],
    },
  ];

  filter(category: string) {
    this.selectedCategory = category;
  }
}
