import { Component } from '@angular/core';
import { QaPanel } from '../../ui/qa-panel/qa-panel';

@Component({
  selector: 'app-qa-page',
  standalone: true,
  imports: [QaPanel],
  templateUrl: './qa.html',
  styleUrls: ['./qa.css']
})
export class QaPage {}