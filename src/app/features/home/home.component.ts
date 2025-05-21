import {Component, HostListener} from '@angular/core';
import {PostService} from "../../core/services/post.service";
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {PostCardComponent} from "../../shared/components/post-card/post-card.component";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {PostFilterComponent} from "../../shared/components/post-filter/post-filter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    PostCardComponent,
    CommonModule, PostCardComponent, MatGridListModule, PostFilterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private postService: PostService,
    private router: Router
  ) {
    this.setCols(window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setCols(event.target.innerWidth);
  }

  posts = this.postService.getPosts()
  cols = 1
  filteredPosts = this.posts;

  navigateToPost(postId: number): void {
    this.router.navigate(['/post', postId]);
  }

  onFilterChange(searchTerm: string): void {
    console.log('search:', searchTerm)
    this.filteredPosts = this.postService.filterPosts(searchTerm);
  }

  private setCols(width: number): void {
    if (width > 1200) {
      this.cols = 3;
    } else if (width > 800) {
      this.cols = 2;
    } else {
      this.cols = 1;
    }
  }
}
