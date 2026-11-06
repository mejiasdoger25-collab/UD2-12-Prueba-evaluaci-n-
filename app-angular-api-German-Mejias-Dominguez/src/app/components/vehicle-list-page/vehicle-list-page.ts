import { Component, inject, OnInit, signal } from '@angular/core';
import { VehicleService } from '../../service/vehicle-service';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';
import { Vehicle } from '../../interface/vehicle-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-page',
  styleUrl: './vehicle-list-page.css',
  templateUrl: './vehicle-list-page.html',
})
export class VehicleListPage implements OnInit{
  vehicleService = inject(VehicleService);
  vehicleList = signal<Vehicle[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe((resp) => {
      this.vehicleList.set(resp.results);
    });
  }  

  openVehicleModal(id: number) {
  this.vehicleService.getOne(id.toString()).subscribe((resp) => {
    const modalRef = this.modalService.open(VehicleItemComponent);
    modalRef.componentInstance.vehicleDetail = resp;
  });
  
}

}
