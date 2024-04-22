import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { CargarscriptsService } from '../../services/cargarscripts/cargarscripts.service';
import { Router, RouterModule } from '@angular/router';
import { Icoments } from '../../models/common.models';
import { ServicioService } from '../../core/services/servicio.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


// interface Item {
// 	nombres: string,
// 	valorizacion: number,
// 	comentario: string,
// };
@Component({
	selector: "app-home",
	standalone: true,
	imports: [RouterLink, AppComponent, RouterOutlet, CommonModule, ReactiveFormsModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
	// item$: Observable<Item[]>;
	// firestore: Firestore = inject(Firestore);
	cargarscripts: CargarscriptsService = inject(CargarscriptsService);
	selectedTab: string = 'Arroces'; // Tab seleccionado por defecto
	comentarios: Icoments[] = [];
	ingresocomentario!: FormGroup;
	router: any;

	

	constructor(
		private servicioServicio: ServicioService, 
		private fb: FormBuilder) {
			this.ingresocomentario = this.fb.group({
				nombres: new FormControl("", [Validators.required]),
				valoracion: new FormControl("", [Validators.required]),				
				comentarios: new FormControl("")
			  })
		// const itemCollection = collection(this.firestore, 'Coments');
		// this.item$ = collectionData(itemCollection) as Observable<Item[]>;

	}

	generateArray(num: number): any[] {
		return Array(num).fill(0);
	  }
	getStarsArray(valorizacion: number): number[] {		
		return Array(valorizacion).fill(0).map((_, index) => index + 1);
	}

	// Método para cambiar el tab seleccionado
	selectTab(tabName: string) {
		this.selectedTab = tabName;
	}

	ngOnInit(): void  {
		this.cargarscripts.cargarScript('popper');
		this.cargarscripts.cargarScript('jquery-2.1.0.min');
		this.cargarscripts.cargarScript('bootstrap.min');
		this.cargarscripts.cargarScript('owl-carousel');
		this.cargarscripts.cargarScript('accordions');
		this.cargarscripts.cargarScript('datepicker');
		this.cargarscripts.cargarScript('scrollreveal.min');
		this.cargarscripts.cargarScript('waypoints.min');
		this.cargarscripts.cargarScript('jquery.counterup.min');
		this.cargarscripts.cargarScript('imgfix.min');
		this.cargarscripts.cargarScript('slick');
		this.cargarscripts.cargarScript('lightbox');
		this.cargarscripts.cargarScript('isotope');
		this.cargarscripts.cargarScript('lightbox');
		this.getAllComentarios();
	}
	
	getAllComentarios(){
		this.servicioServicio
			.getAllcomentarios()
			.snapshotChanges()
			.subscribe({
				next: (data) => {
					this.comentarios=[];
		  
					data.forEach((item) =>{
					  let comentario = item.payload.toJSON() as Icoments;
					  this.comentarios.push({
						key: item.key || '',
						nombres: comentario.nombres,
						comentarios: comentario.comentarios,
						valoracion: comentario.valoracion,
					  })
					})
				}
			})
	}

	onSubmit(){
		if (this.ingresocomentario.valid) {
			this.servicioServicio.addcomentarios(this.ingresocomentario.value);
      		this.router.navigate(['/'])
    	} else {
      		this.ingresocomentario.markAllAsTouched();
    	}
	}

	cerrarModal() {
		const modal = document.getElementById('modal');
		if (modal) {
			modal.style.display = 'none';
		  }
	}
}








//}
// import { Component, OnInit, inject } from "@angular/core";
// import { HousingLocationComponent } from "../housing-location/housing-location.component";
// import { HousingLocation } from "../../models/housing-location";
// import { HousingService } from "../../services/housing.service";
// import { FormBuilder, FormGroup, ReactiveFormsModule  } from "@angular/forms";

// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";
// import {MatButtonModule} from '@angular/material/button';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import { MatIconModule } from "@angular/material/icon";

// @Component({
// 	selector: "app-home",
// 	standalone: true,
// 	imports: [
// 		HousingLocationComponent,
//     ReactiveFormsModule,
// 		MatFormFieldModule,
// 		MatInputModule,
//     MatButtonModule,
//     MatTooltipModule,
// 		MatIconModule,
// 	],
// 	templateUrl: "./home.component.html",
// 	styleUrl: "./home.component.scss",
// })
// export class HomeComponent implements OnInit {
// 	housingLocationList: HousingLocation[] = [];
// 	housingService: HousingService = inject(HousingService);
// 	filteredLocationList: HousingLocation[] = [];
//   results = true;

//   filterForm: FormGroup;

// 	constructor(private formBuilder: FormBuilder) {
//     this.filterForm = this.formBuilder.group({
//       filter: [''],
//     });
// 	}

//   ngOnInit() {
//     this.housingService.getAllHousingLocations().subscribe((data) => {
// 			this.housingLocationList = data;
// 			this.filteredLocationList = this.housingLocationList;
// 		});
//   }

// 	filterResults() {
//     const text = this.filterForm.get('filter')?.value;
// 		if (!text) {
// 			this.filteredLocationList = this.housingLocationList;
// 		}

// 		this.filteredLocationList = this.housingLocationList.filter(
// 			(housingLocation) =>
// 				housingLocation.city.toLowerCase().includes(text.toLowerCase())
// 		);
// 	}

//   clearFilter() {
//     this.filteredLocationList = [...this.housingLocationList];
//     this.filterForm.get('filter')?.setValue('');
//   }
// }
