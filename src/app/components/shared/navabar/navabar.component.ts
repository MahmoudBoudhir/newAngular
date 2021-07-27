import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css','./../../../../assets/css/style1.css']
})
export class NavabarComponent implements OnInit {
  isLoggedIn: boolean = true

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn()

  }
  logout() {
    localStorage.removeItem("myToken")
    this.router.navigate(['/login'])
  }
}
