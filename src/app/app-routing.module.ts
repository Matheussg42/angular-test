import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoStoreComponent } from './produto-store/produto-store.component';
import { ProdutoShowComponent } from './produto-show/produto-show.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
import { ProdutoDestroyComponent } from './produto-destroy/produto-destroy.component';
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

const routes: Routes = [
  /**ROTAS PARA PRODUTOS */
  {
    path: 'produto',
    component: ProdutoComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produto-store',
    component: ProdutoStoreComponent,
    data: { title: 'Cadastrar Produto' }
  },
  {
    path: 'produto-show/:id',
    component: ProdutoShowComponent,
    data: { title: 'Ver Produto' }
  },
  {
    path: 'produto-update/:id',
    component: ProdutoUpdateComponent,
    data: { title: 'Editar o Produto' }
  },
  {
    path: 'produto-destroy/:id',
    component: ProdutoDestroyComponent,
    data: { title: 'Deletar o Produto' }
  },
  { path: '',
    redirectTo: '/produto',
    pathMatch: 'full'
  },

  /** ROTAS PARA LOJA */

  {
    path: 'loja',
    component: LojaComponent,
    data: { title: 'Lista de Lojas' }
  },
  {
    path: 'loja-store',
    component: LojaStoreComponent,
    data: { title: 'Cadastrar Loja' }
  },
  {
    path: 'loja-show/:id',
    component: LojaShowComponent,
    data: { title: 'Ver Loja' }
  },
  {
    path: 'loja-update/:id',
    component: LojaUpdateComponent,
    data: { title: 'Editar a Loja' }
  },
  {
    path: 'loja-destroy/:id',
    component: LojaDestroyComponent,
    data: { title: 'Deletar a Loja ' }
  },
  { path: '',
    redirectTo: '/loja',
    pathMatch: 'full'
  },

  /** ROTAS PARA ESTOQUE */

  {
    path: 'estoque',
    component: EstoqueComponent,
    data: { title: 'Lista de Estoques' }
  },
  {
    path: 'estoque-store',
    component: EstoqueStoreComponent,
    data: { title: 'Cadastrar Estoque' }
  },
  {
    path: 'estoque-show/:id',
    component: EstoqueShowComponent,
    data: { title: 'Ver Estoque' }
  },
  {
    path: 'estoque-loja/:loja_id',
    component: EstoqueLojaComponent,
    data: { title: 'Ver Estoque por Loja' }
  },
  {
    path: 'estoque-produto/:produto_id',
    component: EstoqueProdutoComponent,
    data: { title: 'Ver Estoque por Produto' }
  },
  {
    path: 'estoque-update/:id',
    component: EstoqueUpdateComponent,
    data: { title: 'Editar a Estoque' }
  },
  {
    path: 'estoque-destroy/:id',
    component: EstoqueDestroyComponent,
    data: { title: 'Deletar a Estoque ' }
  },
  { path: '',
    redirectTo: '/estoque',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
