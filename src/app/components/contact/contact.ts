import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  personalInfo = PERSONAL_INFO;
}
