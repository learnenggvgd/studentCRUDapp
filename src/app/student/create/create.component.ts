import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private studentSerivice: StudentServiceService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute
  ) {}
  data = {
    id: '',
    firstName: '',
    lastName: '',
    class: '',
    phNo: '',
  };
  id: any;

  ngOnInit(): void {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    // console.log(this.id);
    if (this.id) {
      this.studentSerivice.getStudentById(this.id).subscribe((res: any) => {
        // console.log(res);
        this.data = res;
      });
    } 
  }

  onSubmit() {
    if (this.id) {
      this.studentSerivice.putStudent(this.id, this.data).subscribe((res) => {
        this.toast.info('successfully edited', 'Editted');
        if (res) {
          this.route.navigate(['view']);
        } else {
          alert('please enter correct details');
        }
      });
    } else {
      this.studentSerivice.postStudent(this.data).subscribe((res) => {
        console.log(res);
        this.toast.success('Successfully Added', 'Success');
        if (res) {
          this.route.navigate(['view']);
        } else {
          alert('please enter correct details ');
        }
      });
    }
  }
}
