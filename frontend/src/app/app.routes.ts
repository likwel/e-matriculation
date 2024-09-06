import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { ImmatriculationComponent } from './immatriculation/immatriculation.component';
import { AddImmatriculationComponent } from './add-immatriculation/add-immatriculation.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { AddProprietaireComponent } from './add-proprietaire/add-proprietaire.component';
import { TypeVehiculeComponent } from './type-vehicule/type-vehicule.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    // { path: 'dashboard', component: FirstComponent },
    { path: '', component: DashboardComponent },
    { path: 'home', redirectTo: '/', pathMatch: 'full'},
    { path: 'dashboard', redirectTo: '/', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'proprietaire', component: ProprietaireComponent },
    { path: 'proprietaire/add', component: AddProprietaireComponent },
    { path: 'vehicule', component: ListVehiculeComponent },
    { path: 'vehicule/add', component: AddVehiculeComponent },
    { path: 'type-vehicule', component: TypeVehiculeComponent },
    { path: 'immatriculation', component: ImmatriculationComponent },
    { path: 'immatriculation/add', component: AddImmatriculationComponent },
    { path: '404notfound', component: PageNotFoundComponent },
    // Route pour les chemins se terminant par .html
    { path: '**', component: PageNotFoundComponent }, 
];
