import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css']
})

export class ExamenListComponent implements OnInit {
 examenList:any[]=[]
    constructor(private examenService:ExamenService) { }
  
    ngOnInit(): void {
      this.examenService.getAllExamen().subscribe(
        res => {
          this.examenList = res
        },
        eror => {
          console.log(eror);
  
        }
  
      )
    }
    delete(examen: any) {
      let index = this.examenList.indexOf(examen);
      this.examenList.splice(index, 1);
  
      this.examenService.deleteExamen(examen._id).subscribe(
        res => {
          console.log(res);
  
        },
        eror => {
          console.log(eror);
  
        }
      )
    }
  
  }