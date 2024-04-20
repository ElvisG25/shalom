import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { CargarscriptsService } from '../../services/cargarscripts/cargarscripts.service';

interface Item {
	nombres: string,
	valorizacion: number,
	comentario: string,
};
@Component({
	selector: "app-home",
	standalone: true,
	imports: [RouterLink, AppComponent, RouterOutlet, CommonModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
	item$: Observable<Item[]>;
	firestore: Firestore = inject(Firestore);
	cargarscripts: CargarscriptsService = inject(CargarscriptsService);
	selectedTab: string = 'Arroces'; // Tab seleccionado por defecto
	

	constructor() {
		const itemCollection = collection(this.firestore, 'Coments');
		this.item$ = collectionData(itemCollection) as Observable<Item[]>;
	}
	getStarsArray(valorizacion: number): number[] {
		return Array(valorizacion).fill(0).map((_, index) => index + 1);
	}

	// Método para cambiar el tab seleccionado
	selectTab(tabName: string) {
		this.selectedTab = tabName;
	}
	ngOnInit() {
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
	}
	submitForm() {
		// Accede al formulario
		const form = document.querySelector('.form') as HTMLFormElement;
		
		// Obtiene los valores del formulario
		const nombres = (form.querySelector('#nombres') as HTMLInputElement).value;
		const valorizacion = parseInt((form.querySelector('#valorizacion') as HTMLInputElement).value);
		const comentario = (form.querySelector('#comentario') as HTMLInputElement).value;
	
		// Valida que los campos no estén vacíos
		if (nombres && valorizacion && comentario) {
		  // Agrega el comentario a Firestore
		  addDoc(collection(this.firestore, 'Coments'), { nombres, valorizacion, comentario })
			.then(() => {
			  // Limpia el formulario después de enviar el comentario
			  form.reset();
			  // Cierra el modal
			  this.cerrarModal();
			  // Opcional: Puedes mostrar un mensaje de éxito al usuario si lo deseas
			  alert('Comentario enviado exitosamente');
			})
			.catch((error) => {
			  console.error('Error al enviar el comentario: ', error);
			  // Opcional: Puedes mostrar un mensaje de error al usuario si lo deseas
			  alert('Error al enviar el comentario. Por favor, inténtalo de nuevo más tarde.');
			});
		} else {
		  // Opcional: Puedes mostrar un mensaje de error al usuario si algún campo está vacío
		  alert('Por favor, completa todos los campos del formulario.');
		}
	  }
	  cerrarModal() {
		const modal = document.getElementById('modal');
		if (modal) {
			modal.style.display = 'none';
		  }
	}
	// submitForm() {
	// 	const form = document.querySelector('.form') as HTMLFormElement;

	// 	// Obtener valores del formulario
	// 	const nombresInput = form.querySelector('#nombres') as HTMLInputElement;
	// 	const valorizacionInput = form.querySelector('#valorizacion') as HTMLInputElement;
	// 	const comentarioInput = form.querySelector('#comentario') as HTMLInputElement;
	// 	const nombres = nombresInput.value;
	// 	const valorizacion = valorizacionInput.value;
	// 	const comentario = comentarioInput.value;

	// 	// Guardar comentario en Firestore
	// 	const commentsCollection = collection(this.firestore, 'Coments');
	// 	addDoc(commentsCollection, { nombres, valorizacion, comentario })
	// 		.then(() => {
	// 			// Limpiar el formulario después de enviarlo con éxito
	// 			form.reset();
	// 			// También podrías agregar alguna lógica adicional aquí, como mostrar un mensaje de éxito
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error al enviar el comentario:', error);
	// 			// Aquí puedes manejar el error de alguna manera si lo deseas
	// 		});
	// }
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
