import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap, tap } from 'rxjs/operators';
import { IPost } from 'src/app/core/interfaces/post.interface';
import { PostService } from 'src/app/core/services/post.service';
import { getTotalCountFromRes } from 'src/app/core/utils/get-header.util';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
  posts$: Observable<{ topPosts: IPost[][], otherPosts: IPost[] }>;
  paginationArr: any[];
  page = 1;
  limit = 14;
  totalCount: number;
  q: string;
  searchControl = new FormControl('');
  updatePosts$ = new BehaviorSubject(null);
  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.q = this.activatedRoute.snapshot.queryParams.q || '';
    this.page = this.activatedRoute.snapshot.queryParams.page || 1;

    this.posts$ = combineLatest([
      this.searchControl.valueChanges.pipe(
        debounceTime(500),
        tap(q => {
          this.addParamToRoute({ q });
          this.q = q;
        }),
        startWith(''),
      ),
      this.updatePosts$
    ]).pipe(

      switchMap(() => this.postService.fetchAll({ page: this.page - 1, limit: this.limit, q: this.q })),
      tap(res => {
        this.totalCount = getTotalCountFromRes(res.headers);
        this.paginationArr = new Array(this.totalCount);
      }),
      map(response => ({ topPosts: this.preparetopPostsArr(response.body.slice(0, 5)), otherPosts: response.body.slice(5) }))
    );
  }

  onPageChange(page: number): void {
    this.page = page;
    this.updatePosts$.next(null);
    this.addParamToRoute({ page })

  }

  trackByFn(index: number): number {
    return index;
  }


  private preparetopPostsArr(news: IPost[]): IPost[][] {
    return [news.slice(0, 2), news.slice(2, 3), news.slice(3)];
  }

  private addParamToRoute(queryParams: any): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge'
    });
  }

}
