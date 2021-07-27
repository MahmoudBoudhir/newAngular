import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../../../assets/css/sb-admin-2.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public imageUrl: String = "./../../../../../../assets/images/a.png"

  // "!"  variable image file bch naatiwha valeur  khater maandheech valeur initial  
  public imageFile!: File
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService) {
    let formControls = {
      image: new FormControl('', [
        Validators.required,

      ]),
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      age: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl('', [
        Validators.required
      ])
    }
    this.registerForm = this.fb.group(formControls)

  }
  get image() { return this.registerForm.get("image") }
  get firstname() { return this.registerForm.get("firstname") }
  get lastname() { return this.registerForm.get("lastname") }
  get email() { return this.registerForm.get("email") }
  get age() { return this.registerForm.get("age") }

  get password() { return this.registerForm.get("password") }
  get repassword() { return this.registerForm.get("repassword") }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn()
    if (isLoggedIn) {
      this.router.navigate(['/register']);
    }



  }

  onFileSelect(event: any) {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event) => this.imageUrl =
      event.target?.result?.toString()!
    this.imageFile = event.target.files[0]
  }
  register() {
    let data = this.registerForm.value
    const file = new FormData();
    file.set('image', this.imageFile);
    file.set('firstname', data.firstname);
    file.set('lastname', data.lastname);
    file.set('email', data.email);
    file.set('password', data.password);
    file.set('repassword', data.repassword);
    file.set('age', data.age);

    

    


    this.userService.registerUser(file).subscribe(
      res => {
        this.toaster.success(res.message)
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err);

      }
    )


  }

}
