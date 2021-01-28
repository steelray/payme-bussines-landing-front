import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorService } from '../services/http-error.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private httpErrorService: HttpErrorService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    return next.handle(request).pipe(
      map(resp => {
        if (resp) {
          this.httpErrorService.error$.next(null);
        }
        return resp;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {

          // client-side error

          errorMessage = `Error: ${error.error.message}`;

        } else {

          if (error.status === 404) {
            this.router.navigate(['**'], { skipLocationChange: true });
          } else {
            errorMessage = error.error.message ? error.error.message : `Error Code: ${error.status}\nMessage: ${error.message}`;
          }


        }

        this.httpErrorService.error$.next(errorMessage);

        return throwError(errorMessage);

      })
    );
  }

}

