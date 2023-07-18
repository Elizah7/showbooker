import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private apiService: ApiService) { }

  signUp() {
    this.apiService.signUp(this.formData)
      .subscribe(
        // response => {
        //   // Handle success response
        //   console.log(response);
        //   // Reset form
        //   this.formData = {
        //     name: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        //   };
        // },
        // error => {
        //   // Handle error response
        //   console.error(error);
        // }
      );
  }
}

