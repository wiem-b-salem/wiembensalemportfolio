import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EXPERIENCE } from '../../data';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperiencePage implements OnInit {
  readonly experience = EXPERIENCE;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (!fragment) return;
      // Let the page render first, then scroll the matching card into view.
      setTimeout(() => {
        const el = document.getElementById(fragment);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    });
  }
}