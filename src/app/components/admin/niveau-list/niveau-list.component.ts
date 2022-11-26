import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { Niveau } from 'src/app/entities/Niveau';

import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'niveau-list',
  templateUrl: './niveau-list.component.html',
  styleUrls: ['./niveau-list.component.scss']
})
export class NiveauListComponent implements OnInit {
  icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedNiveau:any= {id:null,libelle:""}
  selectedID:any={id:null}
  niveau: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;

  search=false;
  searchTerm = new FormControl('');
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getNiveau(this.currentPage - 1);
  }
  getNiveau(page: number): void{
    this.adminService.getNivaux(page).subscribe((niv)=>{
      this.niveau=niv.content;

    })
  }
  niveauPageChanged($event: number) {
    if (this.search) {
      this.searchNiveau($event - 1);
    } else {
      this.getNiveau($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }
  searchNiveau(page:number){
    this.adminService.searchNiveau(this.searchTerm.value as string,page).subscribe((niv:any) => {

      this.niveau = niv.content;
      this.itemsCount = niv.totalElements;

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
    libelle: string
}) {
  const niveau:Niveau ={libelle:data.libelle}

  this.adminService.createNiveau(niveau).subscribe((res) => {
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
  showNiveauUpdateForm(niveau:Niveau){
    this.selectedNiveau.id=niveau.id;
    this.selectedNiveau.libelle=niveau.libelle;


    this.isUpdateModalVisible=true;
  }
  showNiveauDeleteForm(id:number){
   this.selectedID.id=id;
   this.isDeleteModalVisible=true;
  }
   onClickUpdate(data: {
    libelle: string;  id:number


}){
  const niveau:Niveau ={libelle:data.libelle,id:data.id}
    console.log(data);
    this.adminService.updateNiveau(niveau).subscribe((res)=>{
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isUpdateModalVisible=false;});;

   }
   cancel(){
  this.isDeleteModalVisible=false;
   }
   deleteNiveau(id:number){
    this.adminService.deleteNiveau(id).subscribe((res)=>{

       this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isDeleteModalVisible=false;})

   }

}
