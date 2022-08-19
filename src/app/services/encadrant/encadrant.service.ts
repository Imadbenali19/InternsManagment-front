import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { assignStudentDTO } from 'src/app/dto/assignStudent.dto';
import { updateStudentAssignmentDTO } from 'src/app/dto/updateStudentAssignment.dto';
import { Encadrant } from 'src/app/entities/Encadrant';
import { Etudiant } from 'src/app/entities/Etudiant';
import { AuthService } from '../auth.service';

import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class EncadrantService {
  public selectedStudent: Etudiant | undefined;
  constructor(private httpService: HttpService) {}

  me(): Observable<Encadrant> {
    return this.httpService.doGet(`http://localhost:8081/encadrant/me`);
  }

  getStudents(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/encadrant/students?page=${page}`
    );
  }

  getAffectations(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/encadrant/assignments?page=${page}`
    );
  }

  getInernshipsLocations(): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/encadrant/internships/locations`
    );
  }

  assignStudentToInternship(affectation: assignStudentDTO): Observable<any> {
    return this.httpService.doPost(
      'http://localhost:8081/encadrant/internships/assign',
      affectation
    );
  }

  updateStudentAssignment(
    affectation: updateStudentAssignmentDTO
  ): Observable<any> {
    console.log('service update affectation: ', affectation);
    return this.httpService.doPost(
      'http://localhost:8081/encadrant/internships/assignment/update',
      affectation
    );
  }

  searchStudents(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/encadrant/students/search?search=${searchTerm}&page=${page}`
    );
  }

  searchAffectations(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/encadrant/assignments/search?search=${searchTerm}&page=${page}`
    );
  }
}
