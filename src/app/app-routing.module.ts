import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const routes: Routes = [
    { path: 'first-component', component: FileUploadComponent},
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
