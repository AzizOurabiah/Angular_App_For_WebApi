import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent {

  constructor(private service:SharedService){}

  DepartmentList:any=[];

  ngOnInit():void{
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(date => {
      this.DepartmentList = date;
    })
  }

}
