import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { cilZoom, cilCheckCircle, cilX } from '@coreui/icons';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss'],
})
export class EtudiantsComponent implements OnInit {
  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilZoom, cilCheckCircle, cilX };
  }

  ngOnInit(): void {}
}
