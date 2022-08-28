import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Annonce } from 'src/app/entities/Annonce';
import { EmplacementStage } from 'src/app/entities/EmplacementStage';
import { Encadrant } from 'src/app/entities/Encadrant';
import { Etudiant } from 'src/app/entities/Etudiant';
import { Niveau } from 'src/app/entities/Niveau';
import { Stage } from 'src/app/entities/Stage';
import { Stagee } from 'src/app/entities/stagee';
import { User } from 'src/app/entities/User';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService: HttpService) { }

  getStudents(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/etudiants/${page}`
    );
  }
  getEncadrants(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/encadrants/${page}`
    );
  }
  getAdmins(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/administrateurs/${page}`
    );
  }
  createStudent(etudiant: any): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/etudiant`, etudiant
    );
  }
  updateStudent(etudiant: Etudiant): Observable<any> {
    return this.httpService.doPut(
      `http://localhost:8081/admin/etudiant`, etudiant
    );
  }
  deleteStudents(id: number): Observable<any> {
    return this.httpService.doDelete(
      `http://localhost:8081/admin/etudiant/${id}`
    );
  }
  createAdmin(admin: User): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/admin`, admin
    );
  }
  updateAdmin(admin: User): Observable<any> {
    return this.httpService.doPut(
      `http://localhost:8081/admin/admin`, admin
    );
  }
  deleteAdmin(id: number): Observable<any> {
    return this.httpService.doDelete(
      `http://localhost:8081/admin/admin/${id}`
    );
  }
  createEncadrant(encadrant: Encadrant): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/encadrant`, encadrant
    );
  }
  updateEncadrant(encadrant: Encadrant): Observable<any> {
    return this.httpService.doPut(
      `http://localhost:8081/admin/encadrant`, encadrant
    );
  }
  deleteEncadrant(id: number): Observable<any> {
    return this.httpService.doDelete(
      `http://localhost:8081/admin/encadrant/${id}`
    );
  }
  getAnnonce(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/annonces/${page}`
    );
  }
  createAnnonce(annonce: Annonce): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/annonce`, annonce
    );
  }
  updateAnnonce(annonce: Annonce): Observable<any> {
    return this.httpService.doPut(
      `http://localhost:8081/admin/annonce`, annonce
    );
  }
  deleteAnnonce(id: number): Observable<any> {
    return this.httpService.doDelete(
      `http://localhost:8081/admin/annonce/${id}`
    );
  }
  getStages(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/stages/${page}`
    );
  }
  createStage(stage: any): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/stage`, stage
    );
  }
  updateStage(stage: any): Observable<any> {
    return this.httpService.doPut(
      `http://localhost:8081/admin/stage`, stage
    );
  }
  deleteStage(id: number): Observable<any> {
    return this.httpService.doDelete(
      `http://localhost:8081/admin/stage/${id}`
    );
  }
  getNivaux(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/nivaux/${page}`
    );
  }
  getNiveau(id: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/niveau/${id}`
    );
  }
  searchStudents(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/admin/students/search?search=${searchTerm}&page=${page}`
    );
  }
  searchAdmins(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/admin/admins/search?search=${searchTerm}&page=${page}`
    );
  }
  searchEncadrants(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/admin/encadrants/search?search=${searchTerm}&page=${page}`
    );
  }
  searchStages(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/admin/stages/search?search=${searchTerm}&page=${page}`
    );
  }
  searchAnnonces(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/admin/annonces/search?search=${searchTerm}&page=${page}`
    );
  }
  createStudents(data:any): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/students`, data
    );
  }
  getAnnonces(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/home/annonces/${page}`
    );
  }
  createNiveau(niveau: Niveau): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/niveau`, niveau
    );
  }
  updateNiveau(niveau: Niveau): Observable<any> {
    return this.httpService.doPut(
      `http://localhost:8081/admin/niveau`, niveau
    );
  }
  deleteNiveau(id: number): Observable<any> {
    return this.httpService.doDelete(
      `http://localhost:8081/admin/niveau/${id}`
    );
  }
  searchNiveau(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/admin/niveau/search?search=${searchTerm}&page=${page}`
    );
  }
  searchEmpl(searchTerm: string, page: number) {
    return this.httpService.doGet(
      `http://localhost:8081/admin/emplacement/search?search=${searchTerm}&page=${page}`
    );
  }
  getNiveauFromStage(stage:Stage): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/getNiveau`, stage
    );
  }
  getEmpl(page: number): Observable<any> {
    return this.httpService.doGet(
      `http://localhost:8081/admin/emplacements/${page}`
    );
  }
  createEmpl(emplacement: EmplacementStage): Observable<any> {
    return this.httpService.doPost(
      `http://localhost:8081/admin/emplacement`, emplacement
    );
  }
  updateEmpl(emplacement: EmplacementStage): Observable<any> {
    return this.httpService.doPut(
      `http://localhost:8081/admin/emplacement`, emplacement
    );
  }
  deleteEmpl(id: number): Observable<any> {
    return this.httpService.doDelete(
      `http://localhost:8081/admin/emplacement/${id}`
    );
  }

}
