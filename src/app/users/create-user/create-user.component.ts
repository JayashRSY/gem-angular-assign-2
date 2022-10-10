import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  constructor(private _userService:UsersService) { }

  userForm!: FormGroup;
  
  // TECHNOLOGY CHECKBOX LIST UPDATE
  technologies: Array<any> = [
    { name: 'c', value: 'c' },
    { name: 'cpp', value: 'cpp' },
    { name: 'java', value: 'java' },
    { name: 'python', value: 'python' },
    { name: 'javascript', value: 'javascript' }
  ];
  selectedTechnologies: string[] = []
  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.selectedTechnologies.push(event.target.value);
    } 
    else {
      this.selectedTechnologies = this.selectedTechnologies.filter(x => {
        return x != event.target.value
      })
    }
  }

  // FILE UPLOAD
  imgUrl = '../../../assets/images/profile-icon.png'
  onSelectFile(e: any) {
    if(e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result
        this.userForm.value.picture = this.imgUrl
      }
    }
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(2), Validators.pattern(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)]),
      'gender': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'mobile': new FormControl(null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/gi)]),
      'category': new FormControl(null, [Validators.required]),
      'technology': new FormControl(this.selectedTechnologies),
      'picture': new FormControl(this.imgUrl)
    })
  }

  
  isModal = false

  submitted = false

  // FORM VALIDATING
  validateForm() {
    this.submitted = true
    if(this.userForm.invalid) {
      return false;
    }
    else {
      this.isModal = true
      return
    }
  }

  // SUBMITTING DATA TO SERVICE
  submitData() {
    this._userService.updateUsers(this.userForm.value)
    this.isModal = false
  }


}
