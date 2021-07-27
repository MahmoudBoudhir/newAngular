import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
categoryList:any[]=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(
      res => {
        this.categoryList = res
      },
      eror => {
        console.log(eror);

      }

    )
  }
  delete(category: any) {
    let index = this.categoryList.indexOf(category);
    this.categoryList.splice(index, 1);

    this.categoryService.deleteCtegory(category._id).subscribe(
      res => {
        console.log(res);

      },
      eror => {
        console.log(eror);

      }
    )
  }

}
