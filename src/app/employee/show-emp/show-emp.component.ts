import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent {

  constructor(private service: SharedService){}

  employeList:any = [];

  

  ngOnInit():void{
    this.refreshData();
  }

  refreshData(){
    this.service.getEmpList().subscribe(data => {
      this.employeList = data;
    })
  }

}
