import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-post-filter',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatLabel
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
