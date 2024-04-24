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
import Swal from 'sweetalert2';


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
		this.getAllComentarios();
	}

	getAllComentarios() {
		this.servicioServicio
			.getAllcomentarios()
			.snapshotChanges()
			.subscribe({
				next: (data) => {
					this.comentarios = [];
					data.forEach((item) => {
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

	onSubmit() {
		if (this.ingresocomentario.valid) {
			this.servicioServicio.addcomentarios(this.ingresocomentario.value);
			// Mostrar SweetAlert después de que se carguen los comentarios
			this.mostrarSweetAlert();
			this.ingresocomentario.reset(); // Limpia los campos del formulario
			this.cerrarModal();
			this.router.navigate(['/'])
		} else {
			this.ingresocomentario.markAllAsTouched();
		}
	}

	mostrarSweetAlert() {
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Tu comentario se ha guardado",
			showConfirmButton: false,
			timer: 1500
		});
	}
	cerrarModal() {
		const modal = document.getElementById('modal');
		if (modal) {
			modal.style.display = 'none';
		}
	}
}
