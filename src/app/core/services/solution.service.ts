import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { publishReplay, refCount } from "rxjs/operators";
import { HttpObserve } from "../enums/http-observe.enum";
import { ISolution } from "../interfaces/solution.interface";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class SolutionService extends ApiService {
  private readonly controller = 'solutions';
  private cached$: Observable<ISolution[]>;

  fetchAll(): Observable<ISolution[]> {
    if (!this.cached$) {
      this.cached$ = this.get<ISolution[]>(this.controller).pipe(
        publishReplay(1),
        refCount()
      );
    }

    return this.cached$;
  }

  fetchOne(slug: string): Observable<ISolution> {
    return this.get(`${this.controller}/${slug}`);
  }

}