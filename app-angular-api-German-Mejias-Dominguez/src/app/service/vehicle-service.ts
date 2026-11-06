import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { VehicleDetailResponse } from '../interface/vehicle-detail-response';
import { Observable } from 'rxjs';
import { VehicleListPage } from '../components/vehicle-list-page/vehicle-list-page';
import { VehicleListResponse } from '../interface/vehicle-list-response';

@Service()
export class VehicleService {
    private http = inject(HttpClient);
    
    getAll(): Observable<VehicleListResponse> {
        return this.http.get<VehicleListResponse>(`https://swapi.dev/api/vehicles/`);
    }

    getOne(id: string): Observable<VehicleDetailResponse> {
        return this.http.get<VehicleDetailResponse>(`https://swapi.dev/api/vehicles/${id}`);
    }

}

