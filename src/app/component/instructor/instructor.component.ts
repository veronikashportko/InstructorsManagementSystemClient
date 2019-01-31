import { Component, OnInit } from '@angular/core';
import { InstructorsService } from 'src/app/service/instructors-service.service';
import { InstructorModel } from 'src/app/model/intructor.model';
import { FormBuilder,  FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  public instructorsList: InstructorModel[];
  public instructorForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  private isEditing = false;
  private isDeleting = false;
  private instructorIdToEdit: number = null;

  constructor( private instructorsService: InstructorsService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllInstructors();
  }

  public addOrEditInstructor() {
    if (this.instructorForm.get('firstName').value === null || this.instructorForm.get('lastName').value === null) {
      alert('Please, provide criteria with value.');
      return;
    }
    if (this.isEditing) {
      this.updateInstructor(new InstructorModel(
        this.instructorForm.get('firstName').value.trim(), this.instructorForm.get('lastName').value.trim()));
    } else {
      this.addInstructor(new InstructorModel(
        this.instructorForm.get('firstName').value.trim(), this.instructorForm.get('lastName').value.trim()));
    }
    this.instructorForm.reset();
  }

  public addInstructor(newInstructor: InstructorModel) {
    console.log(newInstructor);
    this.instructorsService.addInstructor(newInstructor).subscribe((res) => {
        if (res) {
          this.getAllInstructors();
        } else {
          alert('Instructor was not added.');
        }
      });
  }

  public updateInstructor(newInstructor: InstructorModel) {
    console.log(newInstructor);
    this.instructorsService.updateInstructor(
      this.instructorIdToEdit, newInstructor).subscribe((res) => {
        if (res) {
          this.getAllInstructors();
          this.isEditing = false;
          this.instructorIdToEdit = null;
        } else {
          alert('Instructor was not edited.');
        }
      });
  }

  public deleteInstructor(instructorToDelete: InstructorModel) {
    console.log('deleted ');
    this.isDeleting = true;
    this.instructorsService.deleteInstructor(instructorToDelete.id).subscribe((res) => {
      if (res) {
        this.getAllInstructors();
        this.isEditing = false;
        this.instructorForm.reset();
      } else {
        alert('Instructor was not deleted.');
      } });
  }

  public insertDataInForm(index: number) {
    console.log('inserted ');
    if (!this.isDeleting) {
      this.instructorForm.patchValue({firstName: this.instructorsList[index].firstName, lastName: this.instructorsList[index].lastName});
      this.isEditing = true;
      this.instructorIdToEdit = this.instructorsList[index].id;
    }
    this.isDeleting = false;
  }

  private getAllInstructors() {
    this.instructorsService.getAllInstructors().subscribe((res) => {
      this.instructorsList = res.map((value) => {
        return {id: value.id, firstName: value.firstName, lastName: value.lastName, isDeleted: value.isDeleted };
      }); });
  }
}
