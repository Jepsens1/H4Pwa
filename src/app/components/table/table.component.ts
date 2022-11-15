import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Pictures } from 'src/app/class/Pictures';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() picturess: Pictures[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  OnClick()
  {
    this.dataSource = this.picturess;
    console.log(this.dataSource);
  }
  
  displayedColumns: string[] = ['url', 'desc'];
  dataSource = this.picturess;
}
