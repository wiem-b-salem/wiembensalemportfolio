import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PROFILE } from '../../data';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout implements OnInit {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();

  theme: 'light' | 'dark' = 'light';

  constructor(@Inject(DOCUMENT) private documentRef: Document) {}

  ngOnInit() {
    this.theme = this.documentRef.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light';
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.documentRef.documentElement.dataset['theme'] = this.theme;
    try {
      window.localStorage.setItem('wiem-theme', this.theme);
    } catch {
      /* storage unavailable — ignore */
    }
  }
}
