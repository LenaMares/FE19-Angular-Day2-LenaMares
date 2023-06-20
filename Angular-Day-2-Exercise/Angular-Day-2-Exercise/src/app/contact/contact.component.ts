import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  info = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]), 
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.maxLength(300)]) 
  });

onSubmit() {
  if (this.info.valid) {
    console.log(this.info.value);
    this.info.reset();
  }
}
}




