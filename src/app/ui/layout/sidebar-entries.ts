import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FileIcon } from '../file-icon/file-icon';

export interface NavFile {
  id: string;
  icon: 'folder' | 'folder-open' | 'readme' | 'code' | 'sheet' | 'qa' | 'contact' | 'doc';
  label: string;
  routerLink?: string;
  fragment?: string | null;
  external?: { href: string; download?: boolean; target?: string };
  children?: NavFile[];
}

@Component({
  selector: 'app-sidebar-entries',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FileIcon],
  templateUrl: './sidebar-entries.html',
  styleUrls: ['./layout.css']
})
export class SidebarEntries {
  @Input({ required: true }) rootFiles!: NavFile[];
  @Input({ required: true }) externalFiles!: NavFile[];
  @Input({ required: true }) collapsed!: Set<string>;

  @Output() toggleFolder = new EventEmitter<string>();

  isCollapsed(id: string): boolean {
    return this.collapsed.has(id);
  }
}