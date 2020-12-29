import { PaymentService } from './../../service/payment.service';
import { AddPaymentComponent } from './../../payments/add-apyment/add-payment.component';
import { SportService } from './../../service/sport.service';
import { AddSportsSportsmanComponent } from './../../sports/add-sports-sportsman/add-sports-sportsman.component';
import { AddSportComponent } from './../../sports/add-sport/add-sport.component';
import { StorageService } from './../../service/storage.service';
import { User, Sport, Payment } from './../../model/Model';
import { SportsManService } from './../../service/sports-man.service';
import { WorktimeService } from './../../service/worktime.service';
import { Component, Inject, OnInit } from '@angular/core';
import { SportsMan } from 'src/app/model/Model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddWorktimeComponent } from 'src/app/worktime/add-worktime/add-worktime.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-sports-man',
  templateUrl: './display-sports-man.component.html',
  styleUrls: ['./display-sports-man.component.css']
})
export class DisplaySportsManComponent implements OnInit {
  sportsMan: SportsMan[];
  user: User = {} as User;
  sports: Sport[];
  idGym: number;
  payments: Payment[];

  constructor(public dialogRef: MatDialogRef<DisplaySportsManComponent>, private worktimeService: WorktimeService,
    @Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialog, private sportsManService: SportsManService,
    private storageService: StorageService, private sportService: SportService, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.idGym = this.data.idGym;
     this.worktimeService.findSportsManForWorktime(this.data.id).subscribe(sportsMan => {
      this.sportsMan = sportsMan;
    });
    this.storageService.findUserByUsername(this.storageService.getUsername()).subscribe(user => {
      this.user = user;
    });
  }

  openEditSportsMan(id: number) {

  }

  deleteSportsMan(id: number) {
        if(confirm('Are you sure')) {
          this.sportsManService.deleteSportsMan(id).subscribe(() => {
            window.location.reload();
          });
        }
  }

  addPayment(id: number) {
    const dialogRef = this.dialog.open(AddPaymentComponent, {
      width: '800px',
      data: {id}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  addSportForSportsMan(id: number, idGym: number) {
    const dialogRef = this.dialog.open(AddSportsSportsmanComponent, {
      width: '800px',
      data: {id, idGym}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  showSports(id: number) {
    this.sportService.findSportsForSportsMan(id).subscribe(sports => {
      this.sports = sports;
    });
    this.paymentService.findPaymentForSportsMan(id).subscribe(payments => {
      this.payments = payments;
    });
  }

  deletePayment(id: number) {
    if(confirm('Are you sure')) {
      this.paymentService.deletePayment(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
