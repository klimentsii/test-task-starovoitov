import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THANKS, PRIVACY } from '../consts/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  THANKS = THANKS;
  PRIVACY = PRIVACY;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required]],
      phone: [null, Validators.required],
      delivery: [null, Validators.required],
      payment: [null, Validators.required],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    this.router.navigateByUrl(THANKS.url);
  }
}
