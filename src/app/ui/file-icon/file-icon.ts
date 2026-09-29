import { Component, Input } from '@angular/core';

export type FileIconName =
  | 'folder'
  | 'folder-open'
  | 'readme'
  | 'code'
  | 'doc'
  | 'sheet'
  | 'qa'
  | 'contact'
  | 'react'
  | 'gear';

@Component({
  selector: 'app-file-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      @switch (name) {
        @case ('folder') {
          <path d="M1.5 3.5h4l1.5 2h7.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1.5 12.5v-9Z" fill="#4f8cc9" fill-opacity="0.25" stroke="#4f8cc9" stroke-width="1.1" stroke-linejoin="round"/>
        }
        @case ('folder-open') {
          <path d="M1.5 4h4l1.5 1.8h7.5l-1.6 6.4a1.4 1.4 0 0 1-1.36 1.05H3.2a1.4 1.4 0 0 1-1.36-1.05L1 4.15Z" fill="#4f8cc9" fill-opacity="0.25" stroke="#4f8cc9" stroke-width="1.1" stroke-linejoin="round"/>
          <path d="M1.5 4h4l1.5 1.8h7.5l-1.6 6.4" stroke="#2f6ba8" stroke-width="0.9" stroke-linejoin="round"/>
        }
        @case ('readme') {
          <path class="fi-paper" d="M2.5 2.5h7l3.5 3.5v7.5a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z" fill="#fff" stroke="#d0d7de" stroke-width="1"/>
          <path class="fi-line" d="M9 2.5v3.5h3.5" fill="#fff" stroke="#d0d7de" stroke-width="1" stroke-linejoin="round"/>
          <text x="5.35" y="10.9" font-size="4.6" font-family="sans-serif" font-weight="700" fill="#e36209">M↓</text>
        }
        @case ('code') {
          <path class="fi-paper" d="M2.5 2.5h7l3.5 3.5v7.5a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z" fill="#fff" stroke="#d0d7de" stroke-width="1"/>
          <path class="fi-line" d="M9 2.5v3.5h3.5" fill="#fff" stroke="#d0d7de" stroke-width="1" stroke-linejoin="round"/>
          <path d="M5.8 8.6 4.4 10l1.4 1.4M8.6 7.2l1.8 1.4-1.8 1.4" stroke="#3178c6" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        }
        @case ('doc') {
          <path class="fi-paper" d="M2.5 2.5h7l3.5 3.5v7.5a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z" fill="#fff" stroke="#d0d7de" stroke-width="1"/>
          <path class="fi-line" d="M9 2.5v3.5h3.5" fill="#fff" stroke="#d0d7de" stroke-width="1" stroke-linejoin="round"/>
          <path d="M5 9h6M5 11.2h4.6" stroke="#9aa4ae" stroke-width="0.9" stroke-linecap="round"/>
        }
        @case ('sheet') {
          <path class="fi-paper" d="M2.5 2.5h7l3.5 3.5v7.5a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z" fill="#fff" stroke="#d0d7de" stroke-width="1"/>
          <path class="fi-line" d="M9 2.5v3.5h3.5" fill="#fff" stroke="#d0d7de" stroke-width="1" stroke-linejoin="round"/>
          <path d="M5 9.4h6M5 11.6h6" stroke="#4f8cc9" stroke-width="0.9" stroke-linecap="round"/>
        }
        @case ('qa') {
          <circle class="fi-tint fi-ring" cx="8" cy="8" r="6.2" fill="#ddf4ff" stroke="#0969da" stroke-width="1.2"/>
          <path class="fi-strong" d="M6.3 6.1a1.8 1.8 0 1 1 2.36 1.72c-.47.2-.66.5-.66.97" stroke="#0550ae" stroke-width="1" stroke-linecap="round" fill="none"/>
          <circle class="fi-strong-fill" cx="8" cy="11.1" r="0.75" fill="#0550ae"/>
        }
        @case ('contact') {
          <circle class="fi-tint fi-ring" cx="8" cy="8" r="6.2" fill="#ddf4ff" stroke="#0969da" stroke-width="1.2"/>
          <path class="fi-strong" d="M6 9.2c.7.8 1.4 1.3 2 1.3s1.3-.5 2-1.3" stroke="#0550ae" stroke-width="1" stroke-linecap="round" fill="none"/>
          <circle class="fi-strong-fill" cx="5.7" cy="7" r="0.7" fill="#0550ae"/>
          <circle class="fi-strong-fill" cx="10.3" cy="7" r="0.7" fill="#0550ae"/>
        }
        @case ('react') {
          <path d="M8 8.9c0-.6-.05-1.1-.15-1.5" stroke="#61dafb" stroke-width="1" fill="none"/>
          <g stroke="#61dafb" stroke-width="0.9" fill="none">
            <path d="M8 3.2c-2.2-1-4.6-.4-6.2 1.7 1.5 2 3.6 2.6 6.2 1.5-2.6-1.1-4.7-.5-6.2-1.5 1.6-2.1 4-2.7 6.2-1.7Z"/>
            <path d="M8 12.8c2.2 1 4.6.4 6.2-1.7-1.5-2-3.6-2.6-6.2-1.5 2.6 1.1 4.7.5 6.2 1.5-1.6 2.1-4 2.7-6.2 1.7Z"/>
            <path d="M6.6 4.9c-1-2-2.9-2.9-5-2.2 1 2 2.9 2.9 5 2.2ZM9.4 11.1c1 2 2.9 2.9 5 2.2-1-2-2.9-2.9-5-2.2Z"/>
            <circle cx="8" cy="8" r="1.35" fill="#61dafb"/>
          </g>
        }
        @case ('gear') {
          <path class="fi-paper" d="M8 5.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z" fill="#fff" stroke="#8b949e" stroke-width="1"/>
          <path d="M6.4 2.9h3.2l.5 1.6 1.4.7 1.6-.5.9 2.7-1.2 1.2v1.6l1.2 1.2-.9 2.7-1.6-.5-1.4.7-.5 1.6H6.4l-.5-1.6-1.4-.7-1.6.5-.9-2.7L3.2 9.7V8.1L2 6.9l.9-2.7 1.6.5 1.4-.7.5-1.6Z" stroke="#7a8494" stroke-width="0.8" fill="none" stroke-linejoin="round"/>
        }
      }
    </svg>
  `,
  styleUrl: './file-icon.css'
})
export class FileIcon {
  @Input({ required: true }) name!: FileIconName;
  @Input() size = 16;
}