import { ArbitrateService } from './../../service/arbitrate.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Arbitrate } from 'src/app/model/Model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-arbitrate-sport',
  templateUrl: './add-arbitrate-sport.component.html',
  styleUrls: ['./add-arbitrate-sport.component.css']
})
export class AddArbitrateSportComponent implements OnInit {
  arbitrates: Arbitrate[];
  filterArbitrates: Arbitrate[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private arbitrateService: ArbitrateService) { }

  ngOnInit(): void {
    this.arbitrateService.findAllArbitrates().subscribe(arbitrates => {
      this.arbitrates = arbitrates;
      console.log(this.arbitrates)
      this.arbitrateService.findArbitratesForSport(this.data.id).subscribe(filterArbitrates => {
        this.filterArbitrates = filterArbitrates;
        this.filterArbitrates.forEach(s => {
          this.arbitrates = this.arbitrates.filter(item => item.id !== s.id);
        });
      });
    });
  }
  selectedValue(event: any) {
    const id = event.value;
    this.arbitrateService.addArbitrateForSport(id, this.data.id).subscribe(() => {
      window.location.reload();
    })
  }
}

