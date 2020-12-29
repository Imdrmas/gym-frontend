import { User } from './../model/Model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {} as User;

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    
  }

  login() {
   this.storageService.findUserByUsername(this.user.username).subscribe(user => {

    if(user==null) {
    if(this.user.username=='admin' && this.user.password == 'admin') {
      if(this.user!=null) {
        this.user.admin = true;
        this.storageService.addUser(this.user).subscribe(addUser => {
          this.user = addUser;
          this.router.navigate(['/admin-dashboard/', this.user.username]);
          this.storageService.saveUsername(this.user.username);
        });
      }
      
    } else {
       if(this.user!=null) {
        this.user.admin = false;
        this.storageService.addUser(this.user).subscribe(addUser => {
          this.user = addUser;
          this.storageService.saveUsername(this.user.username);
          this.router.navigate(['/home/', this.user.username]);
        });
      }    
    }
  } else {
    this.storageService.findUserByUsername(this.user.username).subscribe((user) => {
    if(this.user.username=='admin' && this.user.password == 'admin') {
      if(this.user!=null) {
        this.user.admin = true;
        this.storageService.editUser(this.user, user.id).subscribe(addUser => {
          this.user = addUser;
          this.router.navigate(['/admin-dashboard/', this.user.username]);
          this.storageService.saveUsername(this.user.username);
        });
      }
      
    } else {
       if(this.user!=null) {
        this.user.admin = false;
        this.storageService.editUser(this.user, user.id).subscribe(addUser => {
          this.user = addUser;
          this.storageService.saveUsername(this.user.username);
          this.router.navigate(['/home/', this.user.username]);
        });
      } 
  }
});
}
});

  }
}
