import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examen-add',
  templateUrl: './examen-add.component.html',
  styleUrls: ['./examen-add.component.css']
})
export class ExamenAddComponent implements OnInit {
  addExamenForm:FormGroup
  constructor(private fb: FormBuilder, private examenService: ExamenService, private router: Router) {
    let formControls={
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
    }
    this.addExamenForm = this.fb.group(formControls)
   }
   get name() { return this.addExamenForm.get('name') }

  ngOnInit(): void {
  }

  addExamen() {
    let data = this.addExamenForm.value;


    this.examenService.addExamen(data).subscribe(
      res => {

        this.router.navigate(['/examen/examenList'])

      },
      eror => {
        console.log(eror);

      }


    )
  }
}
