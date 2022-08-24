import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/entities/Etudiant';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  constructor(private httpService: HttpService) {}

  me(): Observable<Etudiant> {
    return this.httpService.doGet(`http://localhost:8081/etudiant/me`);
  }
}
