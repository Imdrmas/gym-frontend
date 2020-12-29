import { SportsManService } from './../../service/sports-man.service';
import { WorktimeService } from './../../service/worktime.service';
import { Component, Inject, OnInit } from '@angular/core';
import { SportsMan } from 'src/app/model/Model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddWorktimeComponent } from 'src/app/worktime/add-worktime/add-worktime.component';

@Component({
  selector: 'app-add-sports-man',
  templateUrl: './add-sports-man.component.html',
  styleUrls: ['./add-sports-man.component.css']
})
export class AddSportsManComponent implements OnInit {
  sportsMans: SportsMan[];
  filterSportsMans: SportsMan[];
  sportsMan: SportsMan = {} as SportsMan;
  showProgressBar = false;
  gender: any = {};

  constructor(public dialogRef: MatDialogRef<AddWorktimeComponent>, private worktimeService: WorktimeService,
    @Inject(MAT_DIALOG_DATA) public data, private sportsManService: SportsManService) { }

  ngOnInit(): void {
     this.sportsManService.findAllSportsMans().subscribe(sportsMans => {
       this.sportsMans = sportsMans;
       this.worktimeService.findSportsManForWorktime(this.data.id).subscribe(existsSportsMan => {
        this.filterSportsMans = existsSportsMan;
        this.filterSportsMans.forEach(s => {
          this.sportsMans = this.sportsMans.filter(item => item.id !== s.id);
        })
      })
     })
  }

  selectedValue(event: any) {
    const idSportMan = event.value;
    this.worktimeService.addSportsManForWork(idSportMan, this.data.id).subscribe(() => {
      window.location.reload();
    })
  }

  setGender() {
    this.sportsMan.sex = this.gender;
   }
}
