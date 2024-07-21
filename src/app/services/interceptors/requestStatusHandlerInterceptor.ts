import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment.local";
import {SnakeBarService} from "../snake-bar.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RequestStatusHandlerInterceptor implements HttpInterceptor {
  private _baseUrl = environment.apiBaseUrl

  constructor(
    private snakeBarService: SnakeBarService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({url: `${this._baseUrl}/${req.url}`})
    return next.handle(cloneRequest).pipe(
      catchError(response => {

        this.handleErrorStatusCodes(response);

        return throwError(response);
      }),
    );
  }

  private handleErrorStatusCodes(response: any) {
    if (response.status == 401) {
      this.snakeBarService.showMessage(response.message)
    }
  }
}
