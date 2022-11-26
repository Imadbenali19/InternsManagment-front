import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { cilZoom, cilCheckCircle, cilX } from '@coreui/icons';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

import { Etudiant } from 'src/app/entities/Etudiant';
import { EncadrantService } from 'src/app/services/encadrant/encadrant.service';

@Component({
  selector: 'etudiants-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss'],
})
export class EtudiantListComponent implements OnInit {
  icons = { cilZoom, cilCheckCircle, cilX };

  students: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;
  selectedStudent: any = {
    affectationEmplacementStages: [],
    nom: '',
    prenom: '',
    email: '',
    niveau: {
      stages: {
        nom: '',
      },
    },
  };

  searchTerm = new FormControl('');
  search = false;

  loadingStudents = false;

  isModalVisible = false;
  constructor(
    private encadrantService: EncadrantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingStudents = true;
    this.getStudents(this.currentPage - 1);
  }

  getStudents(page: number): void {
    this.loadingStudents = true;
    this.encadrantService.getStudents(page).subscribe((students) => {
      console.log(students);
      this.students = students.content;
      this.itemsCount = students.totalElements;
      this.loadingStudents = false;
    });
  }

  studentsPageChanged($event: number) {
    if (this.search) {
      this.searchStudents($event - 1);
    } else {
      this.getStudents($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }

  searchStudents(page: number) {
    this.loadingStudents = true;
    this.encadrantService
      .searchStudents(this.searchTerm.value as string, page)
      .subscribe((students: any) => {
        this.students = students.content;
        this.itemsCount = students.totalElements;
        this.loadingStudents = false;
      });
  }

  showStudentDetails(event: MouseEvent, student: Etudiant) {
    this.isModalVisible = true;
    this.selectedStudent = student;
    this.encadrantService.selectedStudent = student;
  }

  checkAssinged(stageNom: any) {
    const stageNames = this.selectedStudent.affectationEmplacementStages.map(
      (affectation: any) => {
        return affectation.stage.nom;
      }
    );
    if (stageNames.includes(stageNom)) {
      return true;
    } else {
      return false;
    }
  }

  toggleModal(event: any) {
    this.isModalVisible = event;
  }

  affecter(i: number) {
    this.router.navigate([`/encadrant/affectations`], {
      queryParams: { stageId: i },
    });
  }
  getPreviewLink(link: any) {
    link = link.split('/');
    link[link.length - 1] = 'preview';
    link = link.join('/');
    console.log(link);
    return link;
  }
}
