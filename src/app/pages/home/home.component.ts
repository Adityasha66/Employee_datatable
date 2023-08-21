import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ishidden: boolean = false

  toggleChange() {
    // this.ishidden=!this.ishidden
    var a = document.getElementById('abc');
    if (a?.getAttribute('hidden') == null) {
      a?.setAttribute('hidden', '')
    }
    else {
      a?.removeAttribute('hidden')
    }
  }

  ngOnInit(): void {
    var authentication = localStorage.getItem('token')
    if (authentication != 'Login successfully') {
      this.router.navigate(['/'])
      localStorage.clear()
    }

  }
}











