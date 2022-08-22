import { Component, OnInit } from '@angular/core';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  }

  ngOnInit(): void {
  }

}
