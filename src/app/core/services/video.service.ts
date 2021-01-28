import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from '../interfaces/video.interface';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class VIdeoService extends ApiService {
  private readonly controller = 'videos';

  fetchAll(params: { album: string }): Observable<IVideo[]> {
    return this.get(`${this.controller}`, { params });
  }


}