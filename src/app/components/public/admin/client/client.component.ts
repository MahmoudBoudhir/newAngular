import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientList: any[] = []
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getUserAll().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].role == "client") {
            this.clientList.push(res[i])
          }
          else {
            this.clientList.push(res[i])
          }
        }

      },
      err => {
        console.log(err);

      }
    )
  }
  delete(user: any) {
    let index = this.clientList.indexOf(user);
    this.clientList.splice(index, 1)
    this.userService.deleteUser(user._id).subscribe(

      res => {
        this.toastr.error(res.message)
      },
      err => {
        console.log(err);

      }
    )
  }

}
