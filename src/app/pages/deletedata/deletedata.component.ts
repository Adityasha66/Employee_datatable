import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletedata',
  templateUrl: './deletedata.component.html',
  styleUrls: ['./deletedata.component.css']
})
export class DeletedataComponent {
  // constructor(private api: ApiService, @Inject(MAT_DIALOG_DATA) private id: any) { }
  // data: any = []
  // ngOnInit(): void {
  //   this.getData()
  //   console.log(this.id);

  // }


  // deleteInfo(data: any) {
  //   this.api.deleteName(data).subscribe({
  //     next: (res) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Deleted',
  //         text: 'Deleted Successfully!!'
  //       })
  //       this.getData()

  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })
  // }

  // getData() {
  //   this.api.getName().subscribe((data) => {
  //     this.data = data;
  //     console.log('hii');
  //   })
  // }
}
