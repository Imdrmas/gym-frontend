import { User } from './../model/Model';
import { Component, OnInit } from '@angular/core';
import { Gym } from '../model/Model';
import { GymService } from '../service/gym.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gyms: Gym[];
  user: User = {} as User;
  username: any;

  constructor(private gymService: GymService, private router: Router,
    private storageService: StorageService, private route: ActivatedRoute) { 
      this.route.params.subscribe(
        params => {
            this.username = this.storageService.getUsername();
            this.storageService.findUserByUsername(this.username).subscribe(user => {
                this.user = user;
            });
        }
      )
    }

  ngOnInit(): void {
    this.gymService.findAllGyms().subscribe(gyms => {
      this.gyms = gyms;
    });
  }

  logout(id: number) {
    this.storageService.signOut();
    this.router.navigateByUrl('/login');
    this.storageService.deleteUser(id).subscribe();
   }
}
