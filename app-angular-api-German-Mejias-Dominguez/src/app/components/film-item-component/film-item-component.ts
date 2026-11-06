import { Component, inject, Input, input, output } from '@angular/core';
import { Film } from '../../interface/film-list-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmDetailResponse } from '../../interface/film-detail-response';

@Component({
  imports: [],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {

  film = input<Film>();
  //filmClicked = output<number>();

  //activeModal = inject(NgbActiveModal);
  //@Input() filmDetail: FilmDetailResponse | undefined;    sin modal

  //getId() { 
    //return this.film()?.url.split("/")[5];                sin el method pues tiene un atb episode_id
  //}

  //emitCharacterClicked() {                                sin modal
    //const id = this.getId;
    //const id: () => string | undefined
    //id ? this.vehicleClicked.emit(id) : alert('Personaje no encontrado');
  //}

  //emitCharacterClicked() {                                sin  modal
    //const idStr = this.getId();
    //const id = idStr ? Number(idStr) : undefined;
    
    //id ? this.vehicleClicked.emit(id) : alert('Personaje no encontrado');
  //}

}
