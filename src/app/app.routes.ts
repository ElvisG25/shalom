import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { EventoComponent } from "./components/pages/evento/evento.component";


export const routes: Routes = [
	{path:'',component:HomeComponent},
	{path:'dashboard',component:DashboardComponent},
	{path:'evento',component:EventoComponent},
	{path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
	{path:'eventos',component:EventosComponent},
	//{path:'**',pathMatch:'full',redirectTo:'dashboard'},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];
