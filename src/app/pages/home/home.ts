import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QaPanel } from '../../ui/qa-panel/qa-panel';
import { PROFILE, PROJECTS, SKILLS, EXPERIENCE, LEARNING } from '../../data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, QaPanel],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage {
  readonly profile = PROFILE;
  readonly projects = PROJECTS;
  readonly skills = SKILLS;
  readonly experience = EXPERIENCE;
  readonly learning = LEARNING;

  get codeSnapshot(): string {
    const p = this.profile;
    return [
      '{',
      `  "name": "${p.name}",`,
      `  "role": "${p.title}",`,
      `  "tagline": "${p.tagline}",`,
      `  "focus": "full-stack development & application architecture",`,
      `  "projects": ${this.projects.length},`,
      `  "github": "${p.github}"`,
      '}'
    ].join('\n');
  }
}