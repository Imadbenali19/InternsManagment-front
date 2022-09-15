import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = 'sidebar';
  public jwtHelper: JwtHelperService = new JwtHelperService();
  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  constructor(
    private authService: AuthService,
    private classToggler: ClassToggleService
  ) {
    super();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated(){
    const token = this.authService.getStoredToken();
    if(token && !this.jwtHelper.isTokenExpired(token)){
        return true;
    }
    return false;

  }

  getRedirectLink(){
      const role: string =  this.authService.getUserRole();
      return `/${role.toLowerCase}/dashboard`
  }
}
