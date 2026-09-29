import { Component } from '@angular/core';
import { SKILLS } from '../../data';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsPage {
  readonly skills = SKILLS;

  get totalSkills(): number {
    return this.skills.reduce((sum, cat) => sum + cat.skills.length, 0);
  }
}