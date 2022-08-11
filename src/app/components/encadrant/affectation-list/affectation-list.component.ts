import { Component, OnInit } from '@angular/core';
import { EncadrantService } from 'src/app/services/encadrant/encadrant.service';

@Component({
  selector: 'affectation-list',
  templateUrl: './affectation-list.component.html',
  styleUrls: ['./affectation-list.component.scss'],
})
export class AffectationListComponent implements OnInit {
  affectations: any = [];
  currentPage: number = 1;
  itemsCount: number = 0;
  constructor(private encadrantService: EncadrantService) {}

  ngOnInit(): void {
    this.getAffectations(this.currentPage - 1);
  }

  getAffectations(page: number): void {
    this.encadrantService.getAffectations(page).subscribe((affectations) => {
      console.log(affectations);
      this.affectations = affectations.content;
      this.itemsCount = affectations.totalElements;
    });
  }

  affectationsPageChanged($event: number) {
    this.getAffectations($event - 1);
    this.currentPage = $event;
    console.log($event);
  }
}
