import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { suppliersMock } from "src/app/modules/suppliers/suppliers.mock";
import { ISupplier } from "../interfaces/supplier.interafce";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  fetchAll(): Observable<ISupplier[]> {
    return of(suppliersMock);
  }

}