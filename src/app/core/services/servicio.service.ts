import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Icoments } from '../../models/common.models';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private dbruta = '/Coments';
  comentsRef: AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.comentsRef = db.list(this.dbruta);
  }

  getAllcomentarios(){
    return this.comentsRef;
  }

  addcomentarios(gastos: Icoments){
    this.comentsRef.push(gastos)
  }

}
