import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillsData = SKILLS;
}
