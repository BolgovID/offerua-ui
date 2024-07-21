import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      setHeaders: {
      // Важно: этот заголовок должен устанавливаться на сервере
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      // Другие заголовки, если необходимо
    }
    });
    return next.handle(clonedRequest);
  }
}
