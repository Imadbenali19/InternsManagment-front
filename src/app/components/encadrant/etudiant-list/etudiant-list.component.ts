import { Component, OnInit } from '@angular/core';
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

  isModalVisible = false;
  constructor(
    private encadrantService: EncadrantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents(this.currentPage - 1);
  }

  getStudents(page: number): void {
    this.encadrantService.getStudents(page).subscribe((students) => {
      console.log(students);
      this.students = students.content;
      this.itemsCount = students.totalElements;
    });
  }

  studentsPageChanged($event: number) {
    this.getStudents($event - 1);
    this.currentPage = $event;
    console.log($event);
  }

  showStudentDetails(event: MouseEvent, student: Etudiant) {
    this.isModalVisible = true;
    this.selectedStudent = student;
    this.encadrantService.selectedStudent = student;
  }

  checkAssinged(stageNom: any) {
    const stageNames = this.selectedStudent.affectationEmplacementStages.map(
      (affectation: any) => {
        return affectation.nom;
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
}
