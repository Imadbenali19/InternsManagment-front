import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cilCheckCircle, cilPencil, cilX, cilZoom,cilTrash } from '@coreui/icons';
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
  icons = { cilZoom, cilCheckCircle, cilX ,cilPencil,cilTrash};
  isDeleteModalVisible=false;
  isUpdateModalVisible = false;
  selectedStudent:any= {id:null,nom:"", prenom:"",email:"",password:""}
  selectedNiveau:any= {id:null, libelle:""}
  selectedID:any={id:null}
  etudiants: any = [];
  nivaux: any = [];

  currentPage: number = 1;
  itemsCount: number = 0;

  search=false;
  searchTerm = new FormControl('');
  constructor(private adminService : AdminService, private router:Router, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.getEtudiants(this.currentPage - 1);
    this.getNiveau(this.currentPage - 1);

  }
  getEtudiants(page: number): void {
    this.adminService.getStudents(page).subscribe((etudiants) => {
      console.log(etudiants);
      this.etudiants = etudiants.content;
      this.itemsCount = etudiants.totalElements;

    });


  }
  studentsPageChanged($event: number) {
    if (this.search) {
      this.searchStudents($event - 1);
    } else {
      this.getEtudiants($event - 1);
    }
    this.currentPage = $event;
    console.log($event);
  }
  searchStudents(page:number){
    this.adminService.searchStudents(this.searchTerm.value as string,page).subscribe((etudiants:any) => {
      console.log(etudiants);
      this.etudiants = etudiants.content;
      this.itemsCount = etudiants.totalElements;

    });

  }
  getNiveau(page: number): void {
    this.adminService.getNivaux(page).subscribe((nivaux) => {

      this.nivaux = nivaux.content;

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

     const etudiant:Etudiant ={nom:data.nom,prenom:data.prenom,password:data.password,email:data.email,niveau:n}

  this.adminService.createStudent(etudiant).subscribe((res) => {
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['./'],{relativeTo: this.route})
    this.isAddModalVisible=false;
  });;

  });

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
    nom: string; email: string; prenom: string;password:string;id:number;niveau:number


}){
  this.adminService.getNiveau(data.niveau).subscribe((n) => {

    this.selectedNiveau = n;



  const etudiant:Etudiant ={nom:data.nom,prenom:data.prenom,email:data.email,id:data.id,niveau:n}
console.log(etudiant);
    this.adminService.updateStudent(etudiant).subscribe((res) => {

      this.router.routeReuseStrategy.shouldReuseRoute= () => false;
         this.router.onSameUrlNavigation='reload';
         this.router.navigate(['./'],{relativeTo: this.route})
         this.isAddModalVisible=false;
    });;
});
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

