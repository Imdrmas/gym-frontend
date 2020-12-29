import { Train } from './../../model/Model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-add-train-sport',
  templateUrl: './add-train-sport.component.html',
  styleUrls: ['./add-train-sport.component.css']
})
export class AddTrainSportComponent implements OnInit {
  trains: Train[];
  filterTrains: Train[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private trainService: TrainService) { }

  ngOnInit(): void {
    this.trainService.findAllTrains().subscribe(trains => {
      this.trains = trains;
      console.log(this.trains)
      this.trainService.findTrainsForSport(this.data.id).subscribe(filterTrains => {
        this.filterTrains = filterTrains;
        this.filterTrains.forEach(s => {
          this.trains = this.trains.filter(item => item.id !== s.id);
        });
      });
    });
  }
  selectedValue(event: any) {
    const idTrain = event.value;
    this.trainService.addTrainForSport(idTrain, this.data.id).subscribe(() => {
      window.location.reload();
    })
  }
}
