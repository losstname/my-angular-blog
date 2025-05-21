import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-post-filter',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatLabel,
    MatDivider,
    MatIcon
  ],
  templateUrl: './post-filter.component.html',
  styleUrl: './post-filter.component.scss'
})
export class PostFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  searchTerm = '';

  onSearchChange(): void {
    this.filterChanged.emit(this.searchTerm);
  }
}
