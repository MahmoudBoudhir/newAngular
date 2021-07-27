import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private getAllExamenUrl = "http://localhost:3000/examen/all"
  private addExamenUrl = "http://localhost:3000/examen/add"
  private deleteAllExamenUrl = "http://localhost:3000/examen/delete/"
  private updateExamenUrl = "http://localhost:3000/examen/update/"
  private getOneExamenUrl = "http://localhost:3000/examen/one/"


  constructor(private http: HttpClient) { }

  getAllExamen() {
    return this.http.get<any>(this.getAllExamenUrl,);

  }

  addExamen(examen: any) {
    return this.http.post<any>(this.addExamenUrl, examen);

  }

  deleteExamen(id: String) {
    return this.http.delete<any>(this.deleteAllExamenUrl + id);
  }

  updateExamen(id: String, examen: any) {


    return this.http.patch<any>(this.updateExamenUrl + id, examen)

  }
  getOneExamen(id: String) {
    return this.http.get<any>(this.getOneExamenUrl + id)
  }
}
