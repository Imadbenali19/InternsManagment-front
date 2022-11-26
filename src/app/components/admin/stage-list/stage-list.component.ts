import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagee } from 'src/app/entities/stagee';
import { AdminService } from 'src/app/services/admin/admin.service';
import {
  cilCheckCircle,
  cilPencil,
  cilX,
  cilZoom,
  cilTrash,
} from '@coreui/icons';
import { Niveau } from 'src/app/entities/Niveau';
import { Stage } from 'src/app/entities/Stage';

@Component({
  selector: 'stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.scss'],
})
export class StageListComponent implements OnInit {
  icons = { cilZoom, cilCheckCircle, cilX, cilPencil, cilTrash };
  isAddModalVisible = false;
  isDeleteModalVisible = false;
  isUpdateModalVisible = false;
  selectedStage: any = { id: null, nom: '', sujet: '', duree: null };
  selectedID: any = { id: null };
  stages: any = [];
  niveau: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;

  search = false;
  searchTerm = new FormControl('');
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getNiveau(this.currentPage - 1);
    this.getStages(this.currentPage - 1);
  }
  getNiveau(page: number): void {
    this.adminService.getNivaux(page).subscribe((niv) => {
      this.niveau = niv.content;

    });
  }
  getStages(page: number): void {
    let niveau: Niveau;
    this.adminService.getStages(page).subscribe((stages) => {
      console.log(stages);
      this.stages = stages.content.map((stage: any) => {
        let stageNiveau = null;
        for (let i = 0; i < this.niveau.length; i++) {
          for (let j = 0; j < this.niveau[i].stages.length; j++) {
            if (this.niveau[i].stages[j].id == stage.id) {
              stageNiveau = this.niveau[i];
            }
          }
        }
        return { ...stage, niveau: stageNiveau };

      });
      console.log(this.stages);
    });
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
  searchStage(page: number) {
    this.adminService
      .searchStages(this.searchTerm.value as string, page)
      .subscribe((stages: any) => {
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
    nom: string;
    sujet: string;
    duree: number;
    niveau: number;
  }) {
    const stage: any = {
      nom: data.nom,
      sujet: data.sujet,
      duree: data.duree,
      niveau: data.niveau,
    };
    console.log(stage);
    this.adminService.createStage(stage).subscribe((res) => {
      console.log(res);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], { relativeTo: this.route });
      this.isAddModalVisible = false;
    });
  }
  showCreation() {
    console.log('clicked');
    this.isAddModalVisible = true;
  }
  showStageUpdateForm(stage: Stagee) {
    this.selectedStage.id = stage.id;
    this.selectedStage.nom = stage.nom;
    this.selectedStage.sujet = stage.sujet;
    this.selectedStage.duree = stage.duree;

    this.isUpdateModalVisible = true;
  }
  showStageDeleteForm(id: number) {
    this.selectedID.id = id;
    this.isDeleteModalVisible = true;
  }
  onClickUpdate(data: {
    nom: string;
    sujet: string;
    id: number;
    duree: number;
    niveau: number;
  }) {
    const stage: any = {
      nom: data.nom,
      sujet: data.sujet,
      duree: data.duree,
      id: data.id,
      niveau: data.niveau,
    };
    console.log(data);
    this.adminService.updateStage(stage).subscribe((res) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], { relativeTo: this.route });
      this.isUpdateModalVisible = false;
    });
  }
  cancel() {
    this.isDeleteModalVisible = false;
  }
  deleteStage(id: number) {
    this.adminService.deleteStage(id).subscribe((res) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], { relativeTo: this.route });
      this.isDeleteModalVisible = false;
    });
  }
}
