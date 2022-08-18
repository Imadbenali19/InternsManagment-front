import { Component } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { adminNavItems, encadrantNavItems, etudiantNavItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public navItems;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private authService: AuthService) {
    const userRole = this.authService.getUserRole();
    switch (userRole) {
      case 'ROLE_ADMIN':
        this.navItems = adminNavItems;
        break;

      case 'ROLE_ENCADRANT':
        this.navItems = encadrantNavItems;
        break;

      case 'ROLE_ETUDIANT':
        this.navItems = etudiantNavItems;
        break;
    }
    
  }
}
