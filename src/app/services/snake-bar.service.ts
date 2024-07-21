import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class SnakeBarService {
  private _onMessage = new Subject<string>()
  onMessage$ = this._onMessage.asObservable()

  showMessage(message: string): any {
    this._onMessage.next(message)
  }
}
