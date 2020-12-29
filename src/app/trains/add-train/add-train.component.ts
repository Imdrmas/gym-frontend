import { TrainService } from './../../service/train.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Train } from 'src/app/model/Model';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {
  train: Train = {} as Train;
  showProgressBar = false;
  title = 'Add train information';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private trainService: TrainService) { }

  ngOnInit(): void {
    if(this.data.idTrain != null) {
      this.title = 'Edit train information';
      this.trainService.findTrainById(this.data.idTrain).subscribe(train => {
        this.train = train;
      });
    }
  }
  addTrain() {
   this.showProgressBar = true;
   if(this.data.idTrain != null) {
    this.trainService.editTrain(this.train, this.data.idTrain).subscribe(train => {
      this.train = train;
      window.location.reload();
    });
   }
   this.trainService.addTrainForGym(this.train, this.data.id).subscribe(train => {
     this.train = train;
     window.location.reload();
   });
  }
}
