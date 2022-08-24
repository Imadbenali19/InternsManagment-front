import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Etudiant } from 'src/app/entities/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
})
export class StagesComponent implements OnInit {
  etudiant: any = { affectationEmplacementStages: [] };
  loading = false;

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.loading = true;
    this.etudiantService.me().subscribe((res: Etudiant) => {
      console.log('response: ', res);
      this.etudiant = res;
      this.loading = true;
    });
  }

  ajouterDocument() {
    console.log('ajouter document');
  }

  formatDate(date: any) {
    return moment(date).format('MMM Do YY');
  }
}
