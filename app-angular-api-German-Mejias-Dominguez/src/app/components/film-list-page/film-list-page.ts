import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmItemComponent } from '../film-item-component/film-item-component';
import { FilmService } from '../../service/film-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Film } from '../../interface/film-list-response';

@Component({
  imports: [FilmItemComponent],
  selector: 'app-film-list-page',
  styleUrl: './film-list-page.css',
  templateUrl: './film-list-page.html',
})
export class FilmListPage { //implements OnInit se carga default el list de vehicles

  filmService = inject(FilmService);
  filmList = signal<Film[]>([]);
  //private modalService = inject(NgbModal); sin modal

  //ngOnInit(): void {
    //this.filmService.getAll().subscribe((resp) => {
      //this.filmList.set(resp.results);
    //});
  //} 

}
