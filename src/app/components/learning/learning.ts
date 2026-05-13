import { Component } from '@angular/core';
import { LEARNING } from '../../data/portfolio-data';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
  templateUrl: './learning.html',
  styleUrl: './learning.css'
})
export class Learning {
  learningItems = LEARNING;
}
