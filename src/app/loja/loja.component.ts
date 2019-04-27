import { Component, OnInit } from '@angular/core';
import { LojaService } from '../service/loja.service';
import { Loja } from "../../model/loja";

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'acao'];
  dataSource: Loja[];
  isLoadingResults = true;
  constructor(private _api: LojaService) { }

  ngOnInit() {
    this._api.getLojas()
    .subscribe(res => {
      this.dataSource = res.data;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }

}
