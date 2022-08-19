import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/entities/Etudiant';
import { Niveau } from 'src/app/entities/Niveau';
import { AdminService } from 'src/app/services/admin/admin.service';
import { textChangeRangeIsUnchanged } from 'typescript/lib/tsserverlibrary';

@Component({
  selector: 'etudiantt-list',
  templateUrl: './etudiantt-list.component.html',
  styleUrls: ['./etudiantt-list.component.scss']
})
export class EtudianttListComponent implements OnInit {
  isAddModalVisible = false;
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedStudent:any= {id:null,nom:"", prenom:"",email:"",password:""}
  selectedNiveau:any= {id:null, libelle:""}
  selectedID:any={id:null}
  etudiants: any = [];
  nivaux: any = [];
  currentPage: number = 1;
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.getEtudiants(this.currentPage - 1);
    this.getNiveau(this.currentPage - 1);

  }
  getEtudiants(page: number): void {
    this.adminService.getStudents(page).subscribe((etudiants) => {
      console.log(etudiants);
      this.etudiants = etudiants;

    });

  }
  getNiveau(page: number): void {
    this.adminService.getNivaux(page).subscribe((nivaux) => {

      this.nivaux = nivaux;

    });
  }
  toggleAddModal(event: any) {
    this.isAddModalVisible = event;
  }
  toggleDeleteModal(event: any) {
    this.isDeleteModalVisible = event;
  }

  toggleUpdateModal(event: any) {
    this.isUpdateModalVisible = event;
  }
  onClickSubmit(data: {
    nom: string; email: string; prenom: string;password:string; niveau:number
}) {
  this.adminService.getNiveau(data.niveau).subscribe((n) => {

    this.selectedNiveau = n;

  });
  const etudiant:Etudiant ={nom:data.nom,prenom:data.prenom,password:data.password,email:data.email,niveau:this.selectedNiveau}

  this.adminService.createStudent(etudiant).subscribe((res) => {

  });;
  }
  showCreation(){
    console.log("clicked");
    this.isAddModalVisible=true;
  }
  showStudentUpdateForm(etudiant:Etudiant){
    this.selectedStudent.id=etudiant.id;
    this.selectedStudent.nom=etudiant.nom;
    this.selectedStudent.prenom=etudiant.prenom;
    this.selectedStudent.email=etudiant.email;
    this.selectedStudent.password=etudiant.password;
    this.isUpdateModalVisible=true;
  }
  showStudentdeleteForm(id:number){
   this.selectedID.id=id;
   this.isDeleteModalVisible=true;
  }
   onClickUpdate(data: {
    nom: string; email: string; prenom: string;password:string,id:number


}){
  const etudiant:Etudiant ={nom:data.nom,prenom:data.prenom,password:data.password,email:data.email,id:data.id}
    console.log(data);
    this.adminService.updateStudent(etudiant).subscribe(res=>console.log(res));

   }
   cancel(){
  this.isDeleteModalVisible=false;
   }
   deleteStudent(id:number){
    this.adminService.deleteStudents(id).subscribe();
       this.router.routeReuseStrategy.shouldReuseRoute= () => false;
       this.router.onSameUrlNavigation='reload';
       this.router.navigate(['./'],{relativeTo: this.route})
       this.isDeleteModalVisible=false;

   }

}

