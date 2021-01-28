import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/core/interfaces/post.interface';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent implements OnInit {
  post$: Observable<IPost>;
  currentLocation: string;
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.post$ = this.postService.fetchOne(this.activatedRoute.snapshot.params.slug);
    this.currentLocation = window.location.href;
  }

}
