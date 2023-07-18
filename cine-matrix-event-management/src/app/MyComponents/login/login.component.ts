import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService) { }

  login() {
    
    // this.apiService.login(this.formData)
    //   .subscribe(
    //     // response => {
    //     //   // Handle success response
    //     //   console.log(response);
    //     //   // Reset form
    //     //   this.formData = {
    //     //     email: '',
    //     //     password: ''
    //     //   };
    //     // },
    //     // error => {
    //     //   // Handle error response
    //     //   console.error(error);
    //     // }
    //   );
  }
}
