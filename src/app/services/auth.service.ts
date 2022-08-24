import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import tokenUrl from '../constants/token';
import { Buffer } from 'buffer';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public code: string = '';
  public jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private httpService: HttpService) {}

  getToken() {
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
    console.log('getting the token with the code: ', this.code);
    return this.httpService.doPost(tokenUrl(this.code), null, options);
  }

  getStoredToken() {
    return sessionStorage.getItem('access_token');
  }

  getUserRole() {
    const token = sessionStorage.getItem('access_token');
    const tokenData = this.jwtHelper.decodeToken(token as any);

    //CHECK the shape of the actual user-authorities object
    return tokenData['user-authorities'][0];
  }

  logout() {
    const mockUserClient = 'taco-admin-client';
    const mockUserSecret = 'secret';
    const accessToken = sessionStorage.getItem('access_token');
    const refreshToken = sessionStorage.getItem('refresh_token');
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

    //revoking access token
    this.httpService.doPost(
      'http://localhost:9000/oauth2/revoke',
      {
        client_id: mockUserClient,
        client_secret: mockUserSecret,
        token: accessToken,
      },
      options
    );

    //revoking refresh token
    this.httpService.doPost(
      'http://localhost:9000/oauth2/revoke',
      {
        client_id: mockUserClient,
        client_secret: mockUserSecret,
        token: refreshToken,
      },
      options
    );
    sessionStorage.clear();
    document.location.href = 'http://localhost:9000/logout';
  }
}
