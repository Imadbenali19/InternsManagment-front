import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  private authService: AuthService;
  constructor(private injector: Injector) {
    this.authService = this.injector.get(AuthService);
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //include CODE as well

    if (
      !req.url.includes('refresh_token') &&
      !req.url.includes('code') &&
      !req.url.includes('token')
    ) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });

      const token: string | null = this.authService.getStoredToken();

      if (token) {
        req = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token),
        });
      }

      return next.handle(req);
    }
    return next.handle(req);
  }
}
