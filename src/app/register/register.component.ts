import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Required for standalone
import { HttpClientModule } from '@angular/common/http'; // Required for standalone
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  standalone: true, // Standalone component flag (if using standalone)
  imports: [ReactiveFormsModule, CommonModule,FormsModule, HttpClientModule], // Add modules here if standalone
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Optional: Add CSS styles if needed
})
export class RegisterComponent {
  registerForm!: FormGroup;
  registerationForm:any

  constructor(private fb: FormBuilder, private router: Router, private cs:CommonService) {
    // Initializing the form with controls
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      // Simulate form submission logic
      console.log('Form Submitted!', this.registerForm.value);
      this.registerationForm = this.registerForm.value
      this.cs.userRegistrationDetails(this.registerationForm)
        this.registerForm.reset();      
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
    }
  }  
}
