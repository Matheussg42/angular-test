import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoStoreComponent } from './produto-store/produto-store.component';
import { ProdutoShowComponent } from './produto-show/produto-show.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
import { ProdutoDestroyComponent } from './produto-destroy/produto-destroy.component';
import { HttpClientModule } from '@angular/common/http';
import { LojaComponent } from './loja/loja.component';
import { LojaStoreComponent } from './loja-store/loja-store.component';
import { LojaShowComponent } from './loja-show/loja-show.component';
import { LojaUpdateComponent } from './loja-update/loja-update.component';
import { LojaDestroyComponent } from './loja-destroy/loja-destroy.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { EstoqueStoreComponent } from './estoque-store/estoque-store.component';
import { EstoqueShowComponent } from './estoque-show/estoque-show.component';
import { EstoqueLojaComponent } from './estoque-loja/estoque-loja.component';
import { EstoqueProdutoComponent } from './estoque-produto/estoque-produto.component';
import { EstoqueUpdateComponent } from './estoque-update/estoque-update.component';
import { EstoqueDestroyComponent } from './estoque-destroy/estoque-destroy.component';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoStoreComponent,
    ProdutoShowComponent,
    ProdutoUpdateComponent,
    ProdutoDestroyComponent,
    MenuComponent,
    LojaComponent,
    LojaStoreComponent,
    LojaShowComponent,
    LojaUpdateComponent,
    LojaDestroyComponent,
    EstoqueComponent,
    EstoqueStoreComponent,
    EstoqueShowComponent,
    EstoqueLojaComponent,
    EstoqueProdutoComponent,
    EstoqueUpdateComponent,
    EstoqueDestroyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
