import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatMenuModule
    , MatListModule, MatExpansionModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatMenuModule
    , MatListModule, MatExpansionModule, MatToolbarModule],
})
export class MaterialModule { }