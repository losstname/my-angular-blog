import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../../core/models/post.model";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardHeader,
    MatCardContent,
    DatePipe,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post!: Post;
  @Output() clicked = new EventEmitter<number>();

  onCardClick(): void {
    this.clicked.emit(this.post.id);
  }
}
