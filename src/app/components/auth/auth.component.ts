import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getAuthorizationCode();
    console.log('the f code: ', this.authService.code);
  }

  ngOnInit(): void {
    this.authService
      .getToken()
      .pipe(take(1))
      .subscribe((tokens: any) => {
        console.log(tokens);
        if ((tokens as any)?.access_token) {
          sessionStorage.setItem('access_token', (tokens as any).access_token);
          sessionStorage.setItem(
            'refresh_token',
            (tokens as any).refresh_token
          );
          const userRole = this.authService.getUserRole();
          switch (userRole) {
            case 'ROLE_ADMIN':
              this.router.navigate(['/admin']);
              break;
            case 'ROLE_ENCADRANT':
              this.router.navigate(['/encadrant/dashboard']);
              break;
            case 'ROLE_ETUDIANT':
              this.router.navigate(['/etudiant']);
              break;
          }
        }
      });
  }

  getAuthorizationCode() {
    this.activateRoute.queryParams.subscribe((params) => {
      console.log(params);
      if (params?.['code']) {
        this.authService.code = params['code'];
      }
    });
  }
}
