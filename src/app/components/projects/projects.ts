import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { PROJECTS } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = PROJECTS;
}
