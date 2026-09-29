import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ProjectsPage } from './pages/projects/projects';
import { ProjectDetailPage } from './pages/project-detail/project-detail';
import { SkillsPage } from './pages/skills/skills';
import { ExperiencePage } from './pages/experience/experience';
import { ContactPage } from './pages/contact/contact';
import { QaPage } from './pages/qa/qa';
import { Layout } from './ui/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomePage },
      { path: 'projects', component: ProjectsPage },
      { path: 'projects/:slug', component: ProjectDetailPage },
      { path: 'skills', component: SkillsPage },
      { path: 'experience', component: ExperiencePage },
      { path: 'contact', component: ContactPage },
      { path: 'explore', component: QaPage },
      { path: '**', redirectTo: '' }
    ]
  }
];