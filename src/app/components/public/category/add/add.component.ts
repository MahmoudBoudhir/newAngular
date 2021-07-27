import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addCategoryForm:FormGroup

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router) {
    let formControls={
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
    }
    this.addCategoryForm = this.fb.group(formControls)
   }

  get name() { return this.addCategoryForm.get('name') }

  ngOnInit(): void {
  }
  addcateg() {
    let data = this.addCategoryForm.value;


    this.categoryService.addCategory(data).subscribe(
      res => {

        this.router.navigate(['/category/categoryList'])

      },
      eror => {
        console.log(eror);

      }


    )
  }


}
