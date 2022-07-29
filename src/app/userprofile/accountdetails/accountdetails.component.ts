import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  logeduser:any={
    name:'', 
    email:'', 
    phone:'',
    address:''
  }
  constructor(private registerService :RegisterService) {
    
   }

  ngOnInit(): void {
   this.logeduser= this.registerService.getloginuser()
   console.log(this.logeduser)
  }


}
