import { Component, OnInit } from '@angular/core';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  }

  ngOnInit(): void {
  }

}
