import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmListResponse } from '../interface/film-list-response';
import { FilmDetailResponse } from '../interface/film-detail-response';

@Service()
export class FilmService {
private http = inject(HttpClient);
    
    getAll(): Observable<FilmListResponse> {
        return this.http.get<FilmListResponse>(`https://swapi.dev/api/films/`);
    }

    getOne(id: string): Observable<FilmDetailResponse> {
        return this.http.get<FilmDetailResponse>(`FilmDetailResponse${id}`);
    }

}
