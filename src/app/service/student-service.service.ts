import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }

  getStudent(){
    return this.http.get('http://localhost:3000/students')
  }

  postStudent(data:any){
    return this.http.post('http://localhost:3000/students',data)
  }
  getStudentById(id:any){
    return this.http.get(`http://localhost:3000/students/${id}`)
  }
  putStudent(id:any,data:any){
    return this.http.put(`http://localhost:3000/students/${id}`,data)
  }
  deleteStudent(id:any){
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }
}
