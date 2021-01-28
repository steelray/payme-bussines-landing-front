import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SupplierService } from 'src/app/core/services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuppliersComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  constructor(
    private cdRef: ChangeDetectorRef,
    private supplierService: SupplierService
  ) { }

  zoom = 13;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    // mapTypeId: "hybrid"
  };
  markers$: Observable<any[]>;
  infoContent = "";

  ngOnInit() {
    this.center = {
      lat: 41.312238901314814,
      lng: 69.24674937439319
    }

    this.markers$ = this.supplierService.fetchAll().pipe(
      map(suppliers => {
        return suppliers.map(supplier => {
          return {
            position: supplier.position,
            title: supplier.title,
            info: `<h2>${supplier.title}</h2><p>${supplier.info}</p>`,
            options: {
              animation: google.maps.Animation.DROP
            }
          }
        })
      })
    )
  }

  openInfo(marker: MapMarker, info) {
    this.infoContent = info;
    this.info.open(marker);

  }


}
