import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SidebarEntries, NavFile } from './sidebar-entries';
import { PROFILE, PROJECTS, EXPERIENCE } from '../../data';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarEntries],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly projects = PROJECTS;
  readonly experience = EXPERIENCE;

  readonly year = new Date().getFullYear();

  drawerOpen = false;
  collapsed = new Set<string>();
  currentTitle = 'README.md';
  theme: 'light' | 'dark' = 'light';

  private navSub: { unsubscribe(): void } | undefined;
  private keySub: { unsubscribe(): void } | undefined;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private documentRef: Document
  ) {}

  ngOnInit() {
    this.theme = this.documentRef.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light';

    this.navSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentTitle = this.titleForUrl(this.router.url);
        this.drawerOpen = false;
      }
    });

    this.keySub = this.eventsKeydown();
  }

  ngOnDestroy() {
    this.navSub?.unsubscribe();
    this.keySub?.unsubscribe();
  }

  private eventsKeydown(): { unsubscribe(): void } | undefined {
    if (typeof document === 'undefined') return undefined;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.drawerOpen) {
        this.drawerOpen = false;
      }
    };
    document.addEventListener('keydown', handler);
    return { unsubscribe: () => document.removeEventListener('keydown', handler) };
  }

  private titleForUrl(url: string): string {
    if (url.startsWith('/projects/')) {
      const slug = url.split('/')[2];
      const project = this.projects.find((p) => p.slug === slug);
      return project ? `projects/${project.slug}.md` : 'projects/*.md';
    }
    if (url.startsWith('/projects')) return 'projects/';
    if (url === '/skills') return 'skills.json';
    if (url === '/experience') return 'experience/';
    if (url === '/explore') return 'explore.md';
    if (url === '/contact') return 'contact.md';
    return 'README.md';
  }

  get rootFiles(): NavFile[] {
    return [
      { id: 'readme', icon: 'readme', label: 'README.md', routerLink: '/' },
      {
        id: 'projects',
        icon: 'folder',
        label: 'projects',
        routerLink: '/projects',
        children: this.projects.map((p) => ({
          id: p.slug,
          icon: 'code' as const,
          label: `${p.slug}.md`,
          routerLink: `/projects/${p.slug}`
        }))
      },
      {
        id: 'experience',
        icon: 'folder',
        label: 'experience',
        routerLink: '/experience',
        children: this.experience.map((e) => ({
          id: e.slug,
          icon: 'code' as const,
          label: `${e.slug}.md`,
          routerLink: '/experience',
          fragment: e.slug
        }))
      },
      { id: 'skills', icon: 'sheet', label: 'skills.json', routerLink: '/skills' },
      { id: 'explore', icon: 'qa', label: 'explore.md', routerLink: '/explore' },
      { id: 'contact', icon: 'contact', label: 'contact.md', routerLink: '/contact' },
      {
        id: 'resume',
        icon: 'doc',
        label: 'resume.pdf',
        external: { href: this.profile.cvUrl, download: true }
      }
    ];
  }

  get externalFiles(): NavFile[] {
    return [
      {
        id: 'github',
        icon: 'code',
        label: 'github.com/wiem-b-salem',
        external: { href: this.profile.github, target: '_blank' }
      },
      {
        id: 'linkedin',
        icon: 'contact',
        label: 'in/wiem-ben-salem',
        external: { href: this.profile.linkedin, target: '_blank' }
      }
    ];
  }

  toggleFolder(id: string) {
    if (this.collapsed.has(id)) {
      this.collapsed.delete(id);
    } else {
      this.collapsed.add(id);
    }
    this.collapsed = new Set(this.collapsed);
  }

  closeDrawer() {
    this.drawerOpen = false;
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