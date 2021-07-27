import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  updateCategoryForm: FormGroup;

  constructor(private fb: FormBuilder, private rout: ActivatedRoute, private categoryService: CategoryService, private router: Router,) {
    let formContols = {
      name: new FormControl('', [
        Validators.required,
      
      ])
    }
    this.updateCategoryForm =
      this.fb.group
        (formContols)
   }

   get name() { return this.updateCategoryForm.get('name') }

  ngOnInit(): void {
    let idCategory =
    this.rout.snapshot.params.id
    ;
  this.categoryService.getOneCategory(idCategory).subscribe(
    res => {
      this.updateCategoryForm.patchValue({
        name: res.name
      })
    }
  )
  }

  updateCategory() {
    let data = this.updateCategoryForm.value;
    let idCategory = this.rout.snapshot.params.id;



    this.categoryService.updateCategory(idCategory,data).subscribe(
      res => {

        this.router.navigate(['/category/categoryList']);

      },
      err => {
        console.log(err);

      }
     )
  }
}
