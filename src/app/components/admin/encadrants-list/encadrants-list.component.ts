import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { Encadrant } from 'src/app/entities/Encadrant';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'encadrants-list',
  templateUrl: './encadrants-list.component.html',
  styleUrls: ['./encadrants-list.component.scss']
})
export class EncadrantsListComponent implements OnInit {
  icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedEncadrant:any= {id:null,nom:"", prenom:"",email:"",password:""}
  selectedID:any={id:null}
  nivaux: any = [];
  encadrants: any = [];

  currentPage: number = 1;
  itemsCount: number = 0;

  search=false;
  searchTerm = new FormControl('');
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEncadrants(this.currentPage - 1);
    this.getNiveau(this.currentPage -1);
  }
  getEncadrants(page: number): void {
    this.adminService.getEncadrants(page).subscribe((encadrants) => {
      console.log(encadrants);
      this.encadrants = encadrants.content;

    });

  }
  encadrantsPageChanged($event: number) {
    if (this.search) {
      this.searchEncadrants($event - 1);
    } else {
      this.getEncadrants($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }
  searchEncadrants(page:number){
    this.adminService.searchEncadrants(this.searchTerm.value as string,page).subscribe((encadrants:any) => {

      this.encadrants = encadrants.content;
      this.itemsCount = encadrants.totalElements;

    });

  }
  getNiveau(page: number): void {
    this.adminService.getNivaux(page).subscribe((nivaux) => {

      this.nivaux = nivaux.content;

    });
  }
  toggleAddModal(event: any) {
    this.isAddModalVisible = event;
  }
  toggleDeleteModal(event: any) {
    this.isDeleteModalVisible = event;
  }

  toggleUpdateModal(event: any) {
    this.isUpdateModalVisible = event;
  }
  onClickSubmit(data: {
    nom: string; email: string; prenom: string;password:string;niveau:number
}) {

  this.adminService.getNiveau(data.niveau).subscribe((n) => {

    const encadrant:Encadrant ={nom:data.nom,prenom:data.prenom,password:"",email:data.email,niveau:n}
     console.log(encadrant)
    this.adminService.createEncadrant(encadrant).subscribe((res) => {
      console.log(res);
      this.router.routeReuseStrategy.shouldReuseRoute= () => false;
         this.router.onSameUrlNavigation='reload';
         this.router.navigate(['./'],{relativeTo: this.route})
         this.isAddModalVisible=false;
    });;

  });

  }
  showCreation(){
    console.log("clicked");
    this.isAddModalVisible=true;
  }
  showEncadrantUpdateForm(encadrant:Encadrant){
    this.selectedEncadrant.id=encadrant.id;
    this.selectedEncadrant.nom=encadrant.nom;
    this.selectedEncadrant.prenom=encadrant.prenom;
    this.selectedEncadrant.email=encadrant.email;
    this.selectedEncadrant.password=encadrant.password;
    this.isUpdateModalVisible=true;
  }
  showEncadrantDeleteForm(id:number){
   this.selectedID.id=id;
   this.isDeleteModalVisible=true;
  }
   onClickUpdate(data: {
    nom: string; email: string; prenom: string;password:string,id:number,niveau:number


}){
  this.adminService.getNiveau(data.niveau).subscribe((n) => {

    const encadrant:Encadrant ={nom:data.nom,prenom:data.prenom,email:data.email,niveau:n,id:data.id}
     console.log(encadrant)
    this.adminService.updateEncadrant(encadrant).subscribe((res) => {
      console.log(res);
      this.router.routeReuseStrategy.shouldReuseRoute= () => false;
         this.router.onSameUrlNavigation='reload';
         this.router.navigate(['./'],{relativeTo: this.route})
         this.isAddModalVisible=false;
    });;

  });

   }
   cancel(){
  this.isDeleteModalVisible=false;
   }
   deleteEncadrant(id:number){
    this.adminService.deleteEncadrant(id).subscribe((res)=>{

       this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isDeleteModalVisible=false;})

   }


}
