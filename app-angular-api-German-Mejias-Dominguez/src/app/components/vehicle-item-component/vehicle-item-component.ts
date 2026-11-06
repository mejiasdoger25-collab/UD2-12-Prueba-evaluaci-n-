import { Component, inject, Input, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vehicle } from '../../interface/vehicle-list-response';
import { VehicleDetailResponse } from '../../interface/vehicle-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [RouterLink],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {

  vehicle = input<Vehicle>();
  vehicleClicked = output<number>();

  activeModal = inject(NgbActiveModal);
  @Input() vehicleDetail: VehicleDetailResponse | undefined;

  getId() {
    return this.vehicle()?.url.split("/")[5];
  }

  //emitCharacterClicked() {
    //const id = this.getId;
    //const id: () => string | undefined
    //id ? this.vehicleClicked.emit(id) : alert('Personaje no encontrado');
  //}

  emitCharacterClicked() {
    const idStr = this.getId();
    const id = idStr ? Number(idStr) : undefined;
    
    id ? this.vehicleClicked.emit(id) : alert('Personaje no encontrado');
  }

}
