import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTaskComponent } from 'src/modules/task/views/index-task/index-task.component';

const routes: Routes = [
  {
    path: '',
    component: IndexTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
