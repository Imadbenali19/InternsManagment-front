import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { User } from 'src/app/entities/User';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedAdmin:any= {id:null,nom:"", prenom:"",email:"",password:""}
  selectedID:any={id:null}
  admins: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;

  search=false;
  searchTerm = new FormControl('');
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAdmins(this.currentPage - 1);
  }
  getAdmins(page: number): void {
    this.adminService.getAdmins(page).subscribe((admins) => {
      console.log(admins);
      this.admins = admins.content;

    });
  }
  adminsPageChanged($event: number) {
    if (this.search) {
      this.searchAdmins($event - 1);
    } else {
      this.getAdmins($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }
  searchAdmins(page:number){
    this.adminService.searchAdmins(this.searchTerm.value as string,page).subscribe((admins:any) => {

      this.admins = admins.content;
      this.itemsCount = admins.totalElements;

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
  const admin:User ={nom:data.nom,prenom:data.prenom,password:"",email:data.email}
  console.log(admin);
  this.adminService.createAdmin(admin).subscribe((res) => {
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
  showAdminUpdateForm(admin:User){
    this.selectedAdmin.id=admin.id;
    this.selectedAdmin.nom=admin.nom;
    this.selectedAdmin.prenom=admin.prenom;
    this.selectedAdmin.email=admin.email;
    this.selectedAdmin.password=admin.password;
    this.isUpdateModalVisible=true;
  }
  showAdminDeleteForm(id:number){
   this.selectedID.id=id;
   this.isDeleteModalVisible=true;
  }
   onClickUpdate(data: {
    nom: string; email: string; prenom: string;password:string,id:number


}){
  const admin:User ={nom:data.nom,prenom:data.prenom,email:data.email,id:data.id}
    console.log(data);
    this.adminService.updateAdmin(admin).subscribe((res)=>{
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isUpdateModalVisible=false;});;

   }
   cancel(){
  this.isDeleteModalVisible=false;
   }
   deleteAdmin(id:number){
    this.adminService.deleteAdmin(id).subscribe((res)=>{

       this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isDeleteModalVisible=false;})

   }


}
