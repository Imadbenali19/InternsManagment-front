import { Component, OnInit } from '@angular/core';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
@Component({
  selector: 'app-encadrants',
  templateUrl: './encadrants.component.html',
  styleUrls: ['./encadrants.component.scss']
})
export class EncadrantsComponent implements OnInit {

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  }

  ngOnInit(): void {
  }

}
