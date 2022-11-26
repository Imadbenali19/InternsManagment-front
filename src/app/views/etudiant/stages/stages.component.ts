import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { addDocumentDTO } from 'src/app/dto/addDocument.dto';
import { DocumentStage } from 'src/app/entities/DocumentStage';
import { Etudiant } from 'src/app/entities/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
})
export class StagesComponent implements OnInit {
  etudiant: any = { affectationEmplacementStages: [] };
  addDocumentForm = this.fb.group<addDocumentDTO>({
    lien: '',
    description: '',
    type: 'rapport',
  });
  loading = false;

  isModalVisible = false;

  toastVisible = false;
  percentage = 0;
  toastMessage = '';

  constructor(
    private etudiantService: EtudiantService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.etudiantService.me().subscribe((res: Etudiant) => {
      console.log('response: ', res);
      this.etudiant = res;
      this.loading = true;
    });
  }
  ajouterDocument() {
    console.log('hello');
    this.isModalVisible = true;
  }

  toggleModal(event: any) {
    this.isModalVisible = event;
  }

  onSubmit() {
    console.log(this.addDocumentForm.value);
    this.etudiantService
      .addDocument(this.addDocumentForm.value as addDocumentDTO)
      .subscribe((res) => {
        console.log(res);
        if (res) {
          console.log('good');

          this.toastMessage = 'Document Ajouter';
          this.toastVisible = true;
        }
      });
  }

  getPreviewLink(link: any) {
    link = link.split('/');
    link[link.length - 1] = 'preview';
    link = link.join('/');
    console.log(link);
    return link;
  }

  formatDate(date: any) {
    return moment(date).format('MMM Do YY');
  }

  toggleToastSuccess() {
    this.toastVisible = !this.toastVisible;
  }

  onVisibleChange($event: boolean) {
    this.toastVisible = $event;
    this.percentage = !this.toastVisible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
}
