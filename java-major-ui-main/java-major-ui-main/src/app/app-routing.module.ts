import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { ViewCourseComponent } from './admin/view-course/view-course.component';
import { ViewVideoComponent } from './admin/view-video/view-video.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddVideoComponent } from './admin/add-video/add-video.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { EditVideoComponent } from './admin/edit-video/edit-video.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { LockedUserNotificationComponent } from './admin/locked-user-notification/locked-user-notification.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent },
  {path: 'categories', component: ViewCategoryComponent },
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: 'courses', component: ViewCourseComponent},
  {path: 'edit-course/:id', component: EditCourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'videos', component: ViewVideoComponent},
  {path: 'edit-video/:id', component: EditVideoComponent},
  {path: 'add-video', component: AddVideoComponent},
  {path: 'users', component: ViewUserComponent},
  {path:'locked-notification',component:LockedUserNotificationComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
