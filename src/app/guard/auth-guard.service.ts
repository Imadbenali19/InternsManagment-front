import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { lastValueFrom, Observable } from 'rxjs';
import { Buffer } from 'buffer';

import { environment } from 'src/environments/environment';
import refreshTokenUrl from '../constants/refresh';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(
    private router: Router,
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot) {
    const token: string | null = sessionStorage.getItem('access_token');
    console.log(this.jwtHelper.isTokenExpired(token as any));

    if (token === null) {
      this.router.navigate(['login']);
    }

    const userRole = this.authService.getUserRole();
    console.log('userRole: ', userRole);
    console.log('Route Data: ', route.data['role']);

    if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
      return false;
    }

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }

    const isRefreshSuccess = await this.refreshingTokens(token);
    if (!isRefreshSuccess) {
      this.router.navigate(['login']);
    }

    return isRefreshSuccess;
  }

  private async refreshingTokens(token: string | null): Promise<boolean> {
    const refreshToken: string | null = sessionStorage.getItem('refresh_token');
    console.log('refreshing access token');
    if (!token || !refreshToken) {
      return false;
    }

    let isRefreshSuccess: boolean;
    try {
      const mockUserClient = 'taco-admin-client';
      const mockUserSecret = 'secret';
      const basicAuth =
        `Basic ` +
        Buffer.from(`${mockUserClient}:${mockUserSecret}`).toString('base64');
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        Authorization: basicAuth,
      });
      const options = {
        headers: headers,
      };

      const response = await lastValueFrom(
        this.httpService.doPost(refreshTokenUrl(refreshToken), null, options)
      );
      console.log('Refresh token response: ' + response);
      const newToken = (<any>response).access_token;
      const newRefreshToken = (<any>response).refreshToken;
      sessionStorage.setItem('access_token', newToken);
      sessionStorage.setItem('refresh_token', newRefreshToken);
      isRefreshSuccess = true;
    } catch (ex) {
      isRefreshSuccess = false;
    }
    return isRefreshSuccess;
  }
}
