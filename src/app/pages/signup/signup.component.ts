import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  login: any = {
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  }

  constructor(private api: ApiService, private router: Router, private http: HttpClient,) { }

  sendData() {
    if (this.login.password == this.login.confirm_password) {
      this.api.addName(this.login).subscribe({
        next: (res) => {
          console.log(res)
          // this.dialog.close('Added')
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Password set'
      })
    }
  }
}

