import { Component } from '@angular/core';
import { InnoCommonLibService } from '../inno-common-lib.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAddressComponent } from '../add-address/add-address.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'inno-address-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers:[InnoCommonLibService],
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AddressListComponent {

  addressList: any;
  selectedAddress: string = '';

  constructor(private modalService: NgbModal, public service: InnoCommonLibService){
    this.getListOfAddress()
  }

  selectAddress(event: any){
    this.selectedAddress = event.target.value;
  }

  open() {
    const modalRef = this.modalService.open(AddAddressComponent);
  }

  getListOfAddress(){
    this.service.addressLists('1234567890').subscribe((data)=>{
      this.addressList = data.data.allSchedule;
    })
  }

}
