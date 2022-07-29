import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
login=new Login();
email: string = ''
  password: string = ''
  constructor(private registerService :RegisterService,private router: Router) { }

  ngOnInit(): void {
  }
  handleSubmitForm(loginForm : any){
    console.log(loginForm);
    this.registerService.login(loginForm.value).subscribe(data => {
      console.log(data.status)
    //  this.router.navigate(['/']);
      if(data.status === "success")
      {
        console.log('h')
        
      }
      else
      {
        
      }
      });
      
  }
}
