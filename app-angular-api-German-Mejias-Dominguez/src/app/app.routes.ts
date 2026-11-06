import { Routes } from '@angular/router';
import { VehicleListPage } from './components/vehicle-list-page/vehicle-list-page';
import { VehicleItemComponent } from './components/vehicle-item-component/vehicle-item-component';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { FilmListPage } from './components/film-list-page/film-list-page';
import { FilmItemComponent } from './components/film-item-component/film-item-component';

export const routes: Routes = [
    {path: 'vehicle-list', component: VehicleListPage},
    {path: 'vehicle-detail/id', component: VehicleItemComponent},
    {path: 'film-list', component: FilmListPage},
    {path: 'film-detail/id', component: FilmItemComponent},
    {path: '', pathMatch: 'full', component: VehicleListPage},
    {path: '**', component: NotFoundPage}
];
