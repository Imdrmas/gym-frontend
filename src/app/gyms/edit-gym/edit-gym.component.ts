import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gym } from 'src/app/model/Model';
import { GymService } from 'src/app/service/gym.service';

@Component({
  selector: 'app-edit-gym',
  templateUrl: './edit-gym.component.html',
  styleUrls: ['./edit-gym.component.css']
})
export class EditGymComponent implements OnInit {
  gym: Gym = {} as Gym;
  showProgressBar = false;

  constructor(public dialogRef: MatDialogRef<EditGymComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private gymService: GymService) {}

  ngOnInit(): void {
    this.gymService.findGymById(this.data.id).subscribe(gym => {
      this.gym = gym;
    });
  }

  editGym() {
    this.showProgressBar = true;
    this.gymService.editGym(this.gym, this.data.id).subscribe(gym => {
      this.gym = gym;
      window.location.reload();
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
