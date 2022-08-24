import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { updateStudentAssignmentDTO } from 'src/app/dto/updateStudentAssignment.dto';
import { formatDate } from '@angular/common';

import { EncadrantService } from 'src/app/services/encadrant/encadrant.service';

@Component({
  selector: 'affectation-list',
  templateUrl: './affectation-list.component.html',
  styleUrls: ['./affectation-list.component.scss'],
})
export class AffectationListComponent implements OnInit {
  updateAssignmentForm = this.fb.group<updateStudentAssignmentDTO>({
    id: undefined,
    encadrant: undefined,
    etudiant: undefined,
    stage: undefined,
    emplacementStage: undefined,
    date_debut: undefined,
    date_fin: undefined,
  });

  affectations: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;

  locations: any = [];

  isUpdateAssignmentModalVisible = false;

  isCheckDeleteModalVisible = false;
  selectedAffectationId = 0;

  searchTerm = new FormControl('');
  search = false;

  loadingAffectations = false;

  constructor(
    private fb: FormBuilder,
    private encadrantService: EncadrantService
  ) {}

  ngOnInit(): void {
    this.getAffectations(this.currentPage - 1);
    this.encadrantService.getInernshipsLocations().subscribe((locs) => {
      this.locations = locs;
    });
  }

  getAffectations(page: number): void {
    this.encadrantService.getAffectations(page).subscribe((affectations) => {
      this.affectations = affectations.content;
      this.itemsCount = affectations.totalElements;
    });
  }

  searchAffectations(page: number) {
    this.loadingAffectations = true;
    this.encadrantService
      .searchAffectations(this.searchTerm.value as string, page)
      .subscribe((affectations: any) => {
        this.affectations = affectations.content;
        this.itemsCount = affectations.totalElements;
        this.loadingAffectations = false;
      });
  }

  affectationsPageChanged($event: number) {
    if (this.search) {
      this.searchAffectations($event - 1);
    } else {
      this.getAffectations($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }

  formatDate(date: any) {
    return moment(date).format('MMM Do YY');
  }

  onUpdateAssignmentSubmit() {
    this.encadrantService
      .updateStudentAssignment(
        this.updateAssignmentForm.value as updateStudentAssignmentDTO
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  showUpdateAssignmentModal(affectation: any) {
    this.updateAssignmentForm.controls.id.setValue(affectation.id);
    this.updateAssignmentForm.controls.encadrant.setValue(
      affectation.encadrant
    );
    this.updateAssignmentForm.controls.etudiant.setValue(affectation.etudiant);
    this.updateAssignmentForm.controls.stage.setValue(affectation.stage);
    this.updateAssignmentForm.controls.emplacementStage.setValue(
      this.locations.filter(
        (location: any) => location.id === affectation.emplacementStage.id
      )[0]
    );
    this.updateAssignmentForm.controls.date_debut.setValue(
      formatDate(affectation.date_debut, 'yyyy-MM-dd', navigator.language)
    );
    this.updateAssignmentForm.controls.date_fin.setValue(
      formatDate(affectation.date_fin, 'yyyy-MM-dd', navigator.language)
    );
    this.isUpdateAssignmentModalVisible = true;
  }

  toggleUpdateAssignmentModal(event: any) {
    this.isUpdateAssignmentModalVisible = event;
  }

  toggleCheckDeleteModal(event: any) {
    this.isCheckDeleteModalVisible = event;
  }

  showCheckDeleteModal(id: number) {
    this.isCheckDeleteModalVisible = true;
    this.selectedAffectationId = id;
  }

  deleteAffectation() {
    this.encadrantService
      .deleteAffectation(this.selectedAffectationId)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
