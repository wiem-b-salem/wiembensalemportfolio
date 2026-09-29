import { Component } from '@angular/core';
import { PROFILE } from '../../data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactPage {
  readonly profile = PROFILE;
}