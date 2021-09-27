import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private cookies: CookieService) {}
  /// @ts-ignore
  login(user: Any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', user);
  }
  setToken(token: string) {
    this.cookies.set('tokenUser', token, { expires: 1 });
  }
  getToken() {
    return this.cookies.get('tokenUser');
  }
  checkToken(): boolean {
    return this.cookies.check('tokenUser');
  }
}
