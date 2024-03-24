import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Observable } from 'rxjs';

interface Item {
  nombres: string,
  valorizacion: string,
  comentario: string,
};
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, AppComponent, RouterOutlet,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // item$: Observable<Item[]>;
  // firestore: Firestore = inject(Firestore);
  // constructor() {
  //   const itemCollection = collection(this.firestore, 'Comentarios');
  //   this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  // }
}
