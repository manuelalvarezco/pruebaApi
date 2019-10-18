import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatIconModule,
  MatTableModule,
  MatDividerModule,
  MatMenuModule,
  MatListModule
 } from "@angular/material";

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatIconModule,
  MatTableModule,
  MatDividerModule,
  MatMenuModule,
  MatListModule
]

@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
