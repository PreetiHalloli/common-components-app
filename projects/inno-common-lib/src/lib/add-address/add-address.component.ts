import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InnoCommonLibService } from '../inno-common-lib.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'inno-add-address',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule, CommonModule],
  providers:[InnoCommonLibService, NgbActiveModal],
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AddAddressComponent {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder, public service: InnoCommonLibService,
    public activeModal: NgbActiveModal) {
    this.addressForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', [Validators.required]],
      country_code: '+91',
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]+")]],
      address1: ['',[Validators.required, Validators.maxLength(50)]],
      address2: ['', [Validators.maxLength(50)]],
      pin: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6), Validators.pattern("[0-9]+")]],
      landmark: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  addAddress(){
    let values = this.addressForm.value;
    values.dist = values.city;
    values.pin = +values.pin;
    this.service.addAddress(values).subscribe((data)=>{
      // this.toaster.show('success', 'dc', 'Address added successfully', 3000);
      this.activeModal.close();
    },
    (err)=>{
      // this.toaster.show('error', 'dc', 'Got error', 3000);
    })
    
  }

}
