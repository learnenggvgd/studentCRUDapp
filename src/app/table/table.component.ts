import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentServiceService } from '../service/student-service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private studentSerivice:StudentServiceService,private router:Router,private toast:ToastrService) {
  }

  studentArray:any=[]

  ngOnInit(): void {
    this.studentSerivice.getStudent().subscribe((res:any)=>{
      // console.log(res);
      this.studentArray = res
      console.log(this.studentArray);
    })
  }  
  editStudent(id:any){
    this.router.navigate([`edit/${id}`])
  }
  deleteStudent(id:any){
    if(confirm("Are you sure you want to delete")){
      this.studentSerivice.deleteStudent([`${id}`]).subscribe((res)=>{
        this.toast.error("Your Student Data Deleted","Deleted")
        this.ngOnInit()
      })   
    }else{
      alert("good")
    }
    } 
}
