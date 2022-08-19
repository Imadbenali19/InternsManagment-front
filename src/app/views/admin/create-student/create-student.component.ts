import { Component, OnInit } from '@angular/core';
import { createStudentDTO } from 'src/app/dto/createStudent.dto';
import { FormBuilder } from '@angular/forms';
import { Etudiant } from 'src/app/entities/Etudiant';
import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  constructor(private adminService : AdminService,  private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onClickSubmit(data: {
    nom: string; email: string; prenom: string;password:string
}) {
  const etudiant:Etudiant ={nom:data.nom,prenom:data.prenom,password:data.password,email:data.email}
  console.log(etudiant);
  this.adminService.createStudent(etudiant).subscribe((res) => {
    console.log(res);
  });;
  }

}
