import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpObserve } from '../enums/http-observe.enum';
import { IPost, IPostQueryParams } from '../interfaces/post.interface';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PageService extends ApiService {
  private readonly controller = 'pages';

  fetchAll(params: IPostQueryParams): Observable<HttpResponse<IPost[]>> {
    return this.get(`${this.controller}`, { params, observe: HttpObserve.RESPONSE });
  }

  fetchOne(slug: string): Observable<IPost> {
    return this.get(`${this.controller}/${slug}`, { params: { expand: 'content' } });
  }

}