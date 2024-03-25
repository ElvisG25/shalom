import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

interface Item {
	nombres: string,
	valorizacion: number,
	comentario: string,
  };
@Component({
	selector: "app-home",
	standalone: true,
	imports: [RouterLink, AppComponent, RouterOutlet,CommonModule]
	// 	HousingLocationComponent,
    // ReactiveFormsModule,
	// 	MatFormFieldModule,
	// 	MatInputModule,
    // MatButtonModule,
    // MatTooltipModule,
	// 	MatIconModule,
	// 	DashboardComponent
	,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	item$: Observable<Item[]>;
	firestore: Firestore = inject(Firestore);
	constructor() {
	  const itemCollection = collection(this.firestore, 'Coments');
	  this.item$ = collectionData(itemCollection) as Observable<Item[]>;
	}
	getStarsArray(valorizacion: number): number[] {
		return Array(valorizacion).fill(0).map((_, index) => index + 1);
	  }
  }
  
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
