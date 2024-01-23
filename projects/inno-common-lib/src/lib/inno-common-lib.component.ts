import { Component } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AddAddressComponent,
  AddressListComponent,
  PaymentOptionsComponent,
} from '../public-api';

@Component({
  selector: 'inno-inno-common-lib',
  standalone: true,
  imports: [NgbModule],
  providers: [NgbModal],
  template: `
    <div>
      <h1>WELCOME</h1>
      <button
        type="button"
        class="px-4 py-2 btn btn-primary"
        (click)="openAddForm()"
      >
        Add address
      </button>

      <button
        type="button"
        class="px-4 py-2 btn btn-primary"
        (click)="openList()"
      >
        Address List
      </button>

      <button
        type="button"
        class="px-4 py-2 btn btn-primary"
        (click)="payment()"
      >
        Payment
      </button>
    </div>
  `,
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class InnoCommonLibComponent {
  constructor(private modalService: NgbModal) {}

  openAddForm() {
    const modalRef = this.modalService.open(AddAddressComponent);
  }

  openList() {
    const modalRef = this.modalService.open(AddressListComponent);
  }

  payment() {
    const modalRef = this.modalService.open(PaymentOptionsComponent);
  }
}
