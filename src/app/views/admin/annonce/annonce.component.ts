import { Component, OnInit } from '@angular/core';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  }

  ngOnInit(): void {
  }

}
