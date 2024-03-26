import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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

	constructor() {
		const itemCollection = collection(this.firestore, 'Coments');
		this.item$ = collectionData(itemCollection) as Observable<Item[]>;
	}
	getStarsArray(valorizacion: number): number[] {
		return Array(valorizacion).fill(0).map((_, index) => index + 1);
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
