import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  annonces: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;
  search=false;
  searchTerm = new FormControl('');
  public jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private adminService : AdminService, private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.getAnnonces(this.currentPage - 1);
  }
  getAnnonces(page: number): void{
    this.adminService.getAnnonces(page).subscribe((annonces)=>{
      this.annonces=annonces.content;
      console.log(this.annonces)
    })
  }
  annoncePageChanged($event: number) {
    if (this.search) {
      this.searchAnnonce($event - 1);
    } else {
      this.getAnnonces($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }
  searchAnnonce(page:number){
    this.adminService.searchAnnonces(this.searchTerm.value as string,page).subscribe((annonces:any) => {

      this.annonces = annonces.content;
      this.itemsCount = annonces.totalElements;

    });
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
  const link:string =   `/${role.toLowerCase()}/dashboard`;
  console.log(link);
  this.router.navigate([`/${role.toLowerCase().split('_')[1]}/dashboard`]);
}
redirectTo(link:string){
    document.location.href=link;
}
}
