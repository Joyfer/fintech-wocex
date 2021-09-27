import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private loginService: LoginService, public router: Router) {}

  ngOnInit(): void {}

  email: string = "";
  password: string = "";
  showErrorAlert: boolean = false;

  login(): void {
    const user: object = { email: this.email, password: this.password };
    // In error case, show an alert with msg
    this.loginService.login(user).subscribe(
      (data) => {
        this.loginService.setToken(data.token);
        this.router.navigateByUrl('/tasks');
      },
      (err) => this.showErrorAlert = true,
      () => console.log('HTTP request completed.')
    );
  }
}
