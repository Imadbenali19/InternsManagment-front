import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagee } from 'src/app/entities/stagee';
import { AdminService } from 'src/app/services/admin/admin.service';
import { cilCheckCircle, cilPencil, cilX, cilZoom,cilTrash } from '@coreui/icons';

@Component({
  selector: 'stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.scss']
})
export class StageListComponent implements OnInit {
  icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedStage:any= {id:null,nom:"", sujet:"",duree:null}
  selectedID:any={id:null}
  stages: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;

  search=false;
  searchTerm = new FormControl('');
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getStages(this.currentPage - 1);
  }
  getStages(page: number): void{
    this.adminService.getStages(page).subscribe((stages)=>{
      this.stages=stages.content;

    })
  }
  stagePageChanged($event: number) {
    if (this.search) {
      this.searchStage($event - 1);
    } else {
      this.getStages($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }
  searchStage(page:number){
    this.adminService.searchStages(this.searchTerm.value as string,page).subscribe((stages:any) => {

      this.stages = stages.content;
      this.itemsCount = stages.totalElements;

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
    nom: string; sujet: string; duree:number
}) {
  const stage:Stagee ={nom:data.nom , sujet:data.sujet, duree:data.duree}
  console.log(stage);
  this.adminService.createStage(stage).subscribe((res) => {
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
  showStageUpdateForm(stage:Stagee){
    this.selectedStage.id=stage.id;
    this.selectedStage.nom=stage.nom;
    this.selectedStage.sujet=stage.sujet;
    this.selectedStage.duree=stage.duree;

    this.isUpdateModalVisible=true;
  }
  showStageDeleteForm(id:number){
   this.selectedID.id=id;
   this.isDeleteModalVisible=true;
  }
   onClickUpdate(data: {
    nom: string; sujet: string; id:number; duree:number


}){
  const stage:Stagee ={nom:data.nom , sujet:data.sujet, duree:data.duree, id:data.id}
    console.log(data);
    this.adminService.updateStage(stage).subscribe((res)=>{
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isUpdateModalVisible=false;});;

   }
   cancel(){
  this.isDeleteModalVisible=false;
   }
   deleteStage(id:number){
    this.adminService.deleteStage(id).subscribe((res)=>{

       this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isDeleteModalVisible=false;})

   }

}
