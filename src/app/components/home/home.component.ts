import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

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
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnnonces(this.currentPage - 1);
  }
  getAnnonces(page: number): void{
    this.adminService.getAnnonce(page).subscribe((annonces)=>{
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
}
