import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected from 'styleUrl'
})
export class LoginComponent {
  loginForm!: FormGroup; // Corrected the spacing
  loginFormDetails:any;

  constructor(private fb: FormBuilder, private router: Router, private cs: CommonService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginFormDetails=this.loginForm.value
      this.cs.loginDetails(this.loginFormDetails).subscribe((res:any)=>{
        localStorage.getItem('token')
      this.loginForm.reset();
      })
      
      
    } else {
      console.log('Form is invalid');
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}
