import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getProject } from '../../data';
import type { Project } from '../../data/models';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailPage implements OnInit {
  project: Project | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.project = getProject(slug) ?? null;
    });
  }
}