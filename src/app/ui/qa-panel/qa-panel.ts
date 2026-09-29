import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QUESTIONS, QUESTION_CATEGORIES, getProject } from '../../data';
import type { CuratedQuestion } from '../../data/models';

@Component({
  selector: 'app-qa-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './qa-panel.html',
  styleUrls: ['./qa-panel.css']
})
export class QaPanel {
  readonly allQuestions = QUESTIONS;
  readonly categories = QUESTION_CATEGORIES;

  activeCat = 'all';
  selected: CuratedQuestion | null = null;

  get filteredQuestions(): CuratedQuestion[] {
    if (this.activeCat === 'all') {
      return this.allQuestions;
    }
    return this.allQuestions.filter((q) => q.category === this.activeCat);
  }

  get selectedAsArray(): CuratedQuestion[] {
    return this.selected ? [this.selected] : [];
  }

  setCategory(cat: string) {
    this.activeCat = cat;
    this.selected = null;
  }

  select(question: CuratedQuestion) {
    this.selected = this.selected?.id === question.id ? null : question;
  }

  relatedProjectTitle(slug: string): string {
    return getProject(slug)?.title ?? 'Project';
  }
}