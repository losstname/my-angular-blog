import {Component, OnInit} from '@angular/core';
import {Post} from "../../core/models/post.model";
import {PostService} from "../../core/services/post.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardHeader,
    DatePipe,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink,
    NgIf,
    NgOptimizedImage,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit{
  post: Post | undefined

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostId(id);

    if (this.post) {
      this.postService.addRecentPost(id)
    }

    if (!this.post) {
      this.router.navigate(['/']);
    }
  }

}
