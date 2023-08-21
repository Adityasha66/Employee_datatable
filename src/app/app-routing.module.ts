import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DATA1Component } from './pages/data1/data1.component';
import { HomeComponent } from './pages/home/home.component';
import { EditData1Component } from './pages/edit-data1/edit-data1.component';



const routes: Routes = [



  {
    path: '', component: HomeComponent, children:
      [
        {
          path: '', component: DATA1Component,
        },
        {
          path: 'data1/:id', component: DATA1Component,
        },
        {
          path: 'data1/:name/:email/:password', component: EditData1Component,
        }
      ]
  },

  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
