import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment.prod'
import { Observable } from 'rxjs';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) {
    // this.http.get(environment.baseUserUrl);
  }

  getCategories(): Observable<any> {
    console.log(environment.baseCategoryUrl)
    return this.http.get<any>(environment.baseCategoryUrl);
  }
  
  getCourses(): Observable<any> {
    console.log(environment.baseCourseUrl)
    return this.http.get<any>(environment.baseCourseUrl);
  }
 
  getCategoriesById(id: any): Observable<any>{
    return this.http.get<any>(environment.baseCategoryUrl+"/"+id);
  }
  getCategoriesCount(): Observable<any> {
    console.log(environment.baseCategoryUrl)
    return this.http.get<any>(environment.baseCategoryUrl+"/total");
  }
  getCourseCount(): Observable<any> {
    console.log(environment.baseCategoryUrl)
    return this.http.get<any>(environment.baseCourseUrl+"/total");
  }
  getUserCount(): Observable<any> {
    console.log(environment.baseUserUrl)
    return this.http.get<any>(environment.baseUserUrl+"/total");
  }

  addCategory(categoryName: any, categoryDesc: any, categoryLogo:any):Observable<any>{
     console.log(categoryName);   
    return this.http.post<any>(environment.baseCategoryUrl,{categoryName, categoryDesc, categoryLogo})
  }

  editCategory(categoryName: any, categoryDesc: any, categoryLogo:any,categoryId:any):Observable<any>{
    // console.log(category);   
    return this.http.put<any>(environment.baseCategoryUrl+"/"+categoryId,{categoryName, categoryDesc, categoryLogo,categoryId})
  }
  deleteCategory(id: any): Observable<any>{
    return this.http.delete<any>(environment.baseCategoryUrl+"/"+id);
  }

  addCourse(courseName: any, courseDesc: any, courseLogo:any, coursePrice: any, likes: any,
     categoryId: any):Observable<any>{
    // console.log(category);   
    return this.http.post<any>(environment.baseCourseUrl+ "/" +categoryId,{courseName, courseDesc, courseLogo, coursePrice, likes, categoryId  })
  }
  getCourseById(id: any): Observable<any>{
    return this.http.get<any>(environment.baseCourseUrl+"/"+id);
  }

  editCourse(courseId:any,courseName: any, courseDesc: any, courseLogo:any,coursePrice: any,likes: any,categoryId: any):Observable<any>{
    // console.log(category);   
    return this.http.put<any>(environment.baseCourseUrl+"/"+courseId+"/"+categoryId,{courseName, courseDesc, courseId,coursePrice,courseLogo,likes,categoryId})
  }

  deleteCourse(id: any): Observable<any>{
    return this.http.delete<any>(environment.baseCourseUrl+"/"+id);
  }

  getVideos(): Observable<any> {
    console.log(environment.baseVideoUrl)
    return this.http.get<any>(environment.baseVideoUrl);
  }

  getVideoById(id: any): Observable<any>{
    return this.http.get<any>(environment.baseVideoUrl+"/"+id);
  }

  addVideo(videoName: any, videoDesc: any, videoPath:any,courseId:any):Observable<any>{
   // console.log(category);   
   return this.http.post<any>(environment.baseVideoUrl+ "/" +courseId,{videoName, videoDesc, videoPath,courseId  })
 }
 deleteVideo(id: any): Observable<any>{
  return this.http.delete<any>(environment.baseVideoUrl+"/"+id);
}




 editVideo(videoId:any,videoName: any,videoDesc: any,videoPath:any,courseId: any):Observable<any>{
    // console.log(category);   
    return this.http.put<any>(environment.baseVideoUrl+"/"+videoId+"/"+courseId,{videoName,videoDesc,videoId,videoPath,courseId})
  }

  getUsers(): Observable<any> {
    console.log(environment.baseUserUrl)
    return this.http.get<any>(environment.baseUserUrl);
  }
 
  unlockUserById(userId:any){
    console.log(userId);
    
    return this.http.put<any>(environment.baseUserUrl+"/unlockuser/"+userId, {userId})
  }





  }

