import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean =false;
  username:string = ''
  constructor(private _RegisterService:RegisterService ) { 
  
    _RegisterService.currentUsers.subscribe((data)=>{

      if(data != null)
      {
        this.isLogin = true;
        this.username= _RegisterService.username
      }
      else
      {
        this.isLogin = false;
      }

     })
  }

  ngOnInit(): void {
  }

}
