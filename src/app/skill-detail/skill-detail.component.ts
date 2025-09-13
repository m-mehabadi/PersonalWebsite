import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillReference {
  projectTitle: string;
  projectType: string; // 'education', 'professional experiences', 'projects'
  institution?: string;
  startDate?: string;
  endDate?: string;
}

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
})
export class SkillDetailComponent {
  @Input() skillName: string = '';
  @Input() proficiency: number = 0; // 1-5 scale
  @Input() yearsOfExperience: number = 0;
  @Input() references: SkillReference[] = [];

  getProficiencyLabel(): string {
    switch (this.proficiency) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Basic';
      case 3:
        return 'Intermediate';
      case 4:
        return 'Advanced';
      case 5:
        return 'Expert';
      default:
        return '';
    }
  }
}
