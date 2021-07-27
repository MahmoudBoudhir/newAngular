import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private getAllCategoryUrl = "http://localhost:3000/category/all"
  private addCategoryUrl = "http://localhost:3000/category/add"
  private deleteAllCategoryUrl = "http://localhost:3000/category/delete/"
  private updateCategoryUrl = "http://localhost:3000/category/update/"
  private getOneCategoryUrl = "http://localhost:3000/category/one/"

  constructor(private http: HttpClient,) { }
  getAllCategory() {
    return this.http.get<any>(this.getAllCategoryUrl,);

  }

  addCategory(category: any) {
    return this.http.post<any>(this.addCategoryUrl, category);

  }

  deleteCtegory(id: String) {
    return this.http.delete<any>(this.deleteAllCategoryUrl + id);
  }

  updateCategory(id: String, category: any) {


    return this.http.patch<any>(this.updateCategoryUrl + id, category)

  }
  getOneCategory(id: String) {
    return this.http.get<any>(this.getOneCategoryUrl + id)
  }
}
