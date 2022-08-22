import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { Annonce } from 'src/app/entities/Annonce';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
export class AnnonceListComponent implements OnInit {
  icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedAnnonce:any= {id:null,titre:"", description:""}
  selectedID:any={id:null}
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
