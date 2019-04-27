import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LojaService } from '../service/loja.service';
import { Loja } from "../../model/loja";

@Component({
  selector: 'app-loja-show',
  templateUrl: './loja-show.component.html',
  styleUrls: ['./loja-show.component.css']
})
export class LojaShowComponent implements OnInit {

  loja: Loja = { id: null, nome: ''};
  deleteLojaErroForm: string = '';
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: LojaService) { }

  ngOnInit() {
    this.getLoja(this.route.snapshot.params['id']);
  }

  getLoja(id) {
    this.api.showLoja(id)
      .subscribe(res => {
        this.loja = res.data;
        this.isLoadingResults = false;
      });
  }

  deleteLoja(id) {
    this.isLoadingResults = true;
    this.api.deleteLoja(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/loja']);
        }, error => {
          this.deleteLojaErroForm = error.error.error;
        });
  }

}
