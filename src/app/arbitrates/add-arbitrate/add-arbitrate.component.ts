import { ArbitrateService } from './../../service/arbitrate.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Arbitrate } from 'src/app/model/Model';

@Component({
  selector: 'app-add-arbitrate',
  templateUrl: './add-arbitrate.component.html',
  styleUrls: ['./add-arbitrate.component.css']
})
export class AddArbitrateComponent implements OnInit {
  showProgressBar = false;
  arbitrate: Arbitrate = {} as Arbitrate;
  title = 'Add arbitrate information';

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private arbitrateService: ArbitrateService) { }

  ngOnInit(): void {
    if(this.data.idArbitrate != null) {
      this.title = 'Edd arbitrate information';
      this.arbitrateService.findArbitrateById(this.data.idArbitrate).subscribe(arbitrate => {
        this.arbitrate = arbitrate;
      });
    }
  }

  addArbitrate() {
    this.showProgressBar = true;
    if(this.data.idArbitrate != null) {
      this.arbitrateService.editArbitrate(this.arbitrate, this.data.idArbitrate).subscribe(arbitrate => {
        this.arbitrate = arbitrate;
        window.location.reload();
      })
    }
    this.arbitrateService.addArbitrateForGym(this.arbitrate, this.data.id).subscribe(arbitrate => {
      this.arbitrate = arbitrate;
      window.location.reload();
    });
  }
}
