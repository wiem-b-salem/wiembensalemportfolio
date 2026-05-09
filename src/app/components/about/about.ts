import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  personalInfo = PERSONAL_INFO;
}
