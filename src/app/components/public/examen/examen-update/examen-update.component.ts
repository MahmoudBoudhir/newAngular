import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examen-update',
  templateUrl: './examen-update.component.html',
  styleUrls: ['./examen-update.component.css']
})
export class ExamenUpdateComponent implements OnInit {
  updateExamenForm: FormGroup;

  constructor(private fb: FormBuilder, private rout: ActivatedRoute, private examenService: ExamenService, private router: Router,) {
    let formContols = {
      name: new FormControl('', [
        Validators.required,
      
      ])
    }
    this.updateExamenForm =
      this.fb.group
        (formContols)
   }
   get name() { return this.updateExamenForm.get('name') }

  ngOnInit(): void {
    let idExamen =
    this.rout.snapshot.params.id
    ;
  this.examenService.getOneExamen(idExamen).subscribe(
    res => {
      this.updateExamenForm.patchValue({
        name: res.name
      })
    }
  )
  }
  updateExamen() {
    let data = this.updateExamenForm.value;
    let idExamen = this.rout.snapshot.params.id;



    this.examenService.updateExamen(idExamen,data).subscribe(
      res => {

        this.router.navigate(['/examen/examenList']);

      },
      err => {
        console.log(err);

      }
     )
  }
}
