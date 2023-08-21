import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient, private api: ApiService) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  login: any = {
    email: '',
    password: ''
  }

  onSubmit() {
    this.api.login(this.login).subscribe({
      next: (res) => {
        if (res.message == 'User not found') {
          Swal.fire({
            icon: 'error',
            title: res.message
          })
          this.route.navigate(['/signup'])
        }
        else if (res.message == 'Password not match') {
          Swal.fire({
            icon: 'error',
            title: res.message
          })
        }
        else if (res.message == 'Login successfully') {
          Swal.fire(
            'Good job!',
            res.message,
            'success'
          )
          localStorage.setItem('token', res.message)
          this.route.navigate(['/home'])
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
