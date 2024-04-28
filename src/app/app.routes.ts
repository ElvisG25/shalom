import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { EventoComponent } from "./components/pages/evento/evento.component";
import { BodasComponent } from "./components/eventos/bodas/bodas.component";
import { Page404Component } from "./components/page404/page404.component";


export const routes: Routes = [
	//{path:'',component:HomeComponent},
	{path: '', redirectTo:'/home', pathMatch:'full'},
	{path:'dashboard',component:DashboardComponent},
	{path:'evento',component:EventoComponent},
	{path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
	{path:'eventos',component:EventosComponent},
	{path:'bodas',component:BodasComponent},
	{path:'notfund',component:Page404Component},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];
