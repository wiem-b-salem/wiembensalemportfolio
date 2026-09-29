import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileIcon } from '../../ui/file-icon/file-icon';
import { PROJECTS } from '../../data';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink, FileIcon],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsPage {
  readonly projects = PROJECTS;
}