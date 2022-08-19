import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/entities/Encadrant';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'encadrants-list',
  templateUrl: './encadrants-list.component.html',
  styleUrls: ['./encadrants-list.component.scss']
})
export class EncadrantsListComponent implements OnInit {
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedEncadrant:any= {id:null,nom:"", prenom:"",email:"",password:""}
  selectedID:any={id:null}
  encadrants: any = [];
  currentPage: number = 1;
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEncadrants(this.currentPage - 1);
  }
  getEncadrants(page: number): void {
    this.adminService.getEncadrants(page).subscribe((encadrants) => {
      console.log(encadrants);
      this.encadrants = encadrants;

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
    nom: string; email: string; prenom: string;password:string
}) {
  const encadrant:Encadrant ={nom:data.nom,prenom:data.prenom,password:data.password,email:data.email}
  console.log(encadrant);
  this.adminService.createEncadrant(encadrant).subscribe((res) => {
    console.log(res);
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isAddModalVisible=false;
  });;
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
    nom: string; email: string; prenom: string;password:string,id:number


}){
  const encadrant:Encadrant ={nom:data.nom,prenom:data.prenom,password:data.password,email:data.email,id:data.id}
    console.log(data);
    this.adminService.updateEncadrant(encadrant).subscribe((res)=>{
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isUpdateModalVisible=false;});;

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
