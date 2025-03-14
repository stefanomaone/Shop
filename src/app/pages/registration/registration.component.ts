import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern("^[A-Za-zÀ-ÿ' ]+$")]],
      cognome: ['', [Validators.required, Validators.pattern("^[A-Za-zÀ-ÿ' ]+$")]],
      dataNascita: ['', Validators.required],
      prefisso: ['', [Validators.required, Validators.pattern('^\\+?[0-9]+$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]],
      via: ['', Validators.required],
      indirizzo: ['', Validators.required],
      numeroCivico: ['', Validators.required],
      cap: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      email: ['', [Validators.required, Validators.email]],
      confermaEmail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confermaPassword: ['', Validators.required],
      accettaInformativa: [false, Validators.requiredTrue]
    }, { validators: [this.passwordMatchValidator, this.emailMatchValidator] });
  }

  // Validazione password e conferma password
  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confermaPassword = form.get('confermaPassword')?.value;
    
    return password === confermaPassword ? null : { mismatch: true };
  }

  // Validazione email e conferma email
  emailMatchValidator(form: AbstractControl): ValidationErrors | null {
    const email = form.get('email')?.value;
    const confermaEmail = form.get('confermaEmail')?.value;
    
    return email === confermaEmail ? null : { emailMismatch: true };
  }

  // Navigazione
  handleHome() {
    this.route.navigate(['']);
  }

  handleLogin() {
    this.route.navigate(['login']);
  }

  //Submit del form
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Dati inviati:', this.registerForm.value);
    } else {
      console.log('Form non valido', this.registerForm.errors);
    }
  }
}
