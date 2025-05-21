import { Injectable } from '@angular/core';
import {Post} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  private readonly RECENT_POSTS_KEY = 'recentPosts';
  private posts: Post[] = [
    {
      id: 1,
      title: 'First Steps in Angular',
      date: '2023-01-15',
      summary: 'A quick overview of getting started with Angular development.',
      imageUrl: 'https://fakeimg.pl/400x200/FF0000/FFFFFF?text=Angular+Basics',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      id: 2,
      title: 'Understanding Components',
      date: '2023-02-01',
      summary: 'Deep dive into Angular components and their lifecycle.',
      imageUrl: 'https://fakeimg.pl/400x200/00FF00/FFFFFF?text=Components',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
    },
    {
      id: 3,
      title: 'Routing in Angular Applications',
      date: '2023-03-10',
      summary: 'How to set up and manage navigation with Angular Router.',
      imageUrl: 'https://fakeimg.pl/400x200/0000FF/FFFFFF?text=Routing',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...'
    },
    {
      id: 4,
      title: 'Working with Services',
      date: '2023-04-05',
      summary: 'Leveraging services for data sharing and business logic.',
      imageUrl: 'https://fakeimg.pl/400x200/FFFF00/000000?text=Services',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...'
    },
    {
      id: 5,
      title: 'Angular Forms: Reactive vs. Template-driven',
      date: '2023-05-20',
      summary: 'Exploring the two main approaches to handling forms in Angular.',
      imageUrl: 'https://fakeimg.pl/400x200/FF00FF/FFFFFF?text=Forms',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  getPosts(): Post[] {
    return this.posts;
  }

  getPostId(postId: number): Post | undefined {
    return this.posts.find(post => post.id === postId);
  }

  filterPosts(q: string): Post[] {
    console.log('q:', q)
    if (!q) return this.posts;
    return this.posts.filter(post => post.title.toLowerCase().includes(q.toLowerCase()));
  }

  getRecentPosts(): Post[] {
    const recentIds = JSON.parse(localStorage.getItem(this.RECENT_POSTS_KEY) || "[]");
    return recentIds.map((id: number) => this.getPostId(id)).filter(Boolean);
  }

  addRecentPost(id: number): void {
    let recentIds = JSON.parse(localStorage.getItem(this.RECENT_POSTS_KEY) || "[]");
    recentIds = [id, ...recentIds.filter((existingId: number) => existingId !== id)].slice(0, 3);
    localStorage.setItem(this.RECENT_POSTS_KEY, JSON.stringify(recentIds));
  }
}
