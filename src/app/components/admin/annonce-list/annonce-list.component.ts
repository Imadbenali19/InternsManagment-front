import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/entities/Annonce';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
export class AnnonceListComponent implements OnInit {
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedAnnonce:any= {id:null,titre:"", description:""}
  selectedID:any={id:null}
  annonces: any = [];
  currentPage: number = 1;
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnnonces(this.currentPage - 1);
  }
  getAnnonces(page: number): void{
    this.adminService.getAnnonce(page).subscribe((annonces)=>{
      this.annonces=annonces;
      console.log(this.annonces)
    })
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
    titre: string; description: string
}) {
  const annonce:Annonce ={titre:data.titre,description:data.description}
  console.log(annonce);
  this.adminService.createAnnonce(annonce).subscribe((res) => {
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
  showAnnonceUpdateForm(annonce:Annonce){
    this.selectedAnnonce.id=annonce.id;
    this.selectedAnnonce.titre=annonce.titre;
    this.selectedAnnonce.description=annonce.description;

    this.isUpdateModalVisible=true;
  }
  showAnnonceDeleteForm(id:number){
   this.selectedID.id=id;
   this.isDeleteModalVisible=true;
  }
   onClickUpdate(data: {
    titre: string; description: string; id:number


}){
  const annonce:Annonce ={titre:data.titre,description:data.description,id:data.id}
    console.log(data);
    this.adminService.updateAnnonce(annonce).subscribe((res)=>{
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isUpdateModalVisible=false;});;

   }
   cancel(){
  this.isDeleteModalVisible=false;
   }
   deleteAnnonce(id:number){
    this.adminService.deleteAnnonce(id).subscribe((res)=>{

       this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isDeleteModalVisible=false;})

   }

}
