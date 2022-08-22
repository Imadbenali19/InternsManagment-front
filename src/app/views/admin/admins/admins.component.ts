import { Component, OnInit } from '@angular/core';
import { cilCheckCircle, cilPencil, cilTrash, cilX, cilZoom } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  }

  ngOnInit(): void {
  }

}
