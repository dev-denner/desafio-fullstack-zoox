import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CidadesService } from '../../services/cidades.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit, OnChanges {

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @Input() idEstado: string;

  public cidades: any;
  public cidade: any;
  public action = 'Criar';
  public buscaCidade: string;

  private delay;

  constructor(private cidadesService: CidadesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.listarCidades();
  }

  ngOnInit(): void {
    this.clearCidade();
  }

  listarCidades(query: string = ''): void {

    if (!this.idEstado) {
      return;
    }

    let queryString = `estado_id=${this.idEstado}`;

    if (query) {
      queryString = queryString + '&' + query;
    }

    this.cidadesService.listCidade(null, queryString).subscribe(
      response => {
        this.cidades = response.data;
      },
      error => {
        console.error(error);
      });

  }

  clearCidade(): void {
    this.cidade = {
      _id: '',
      nome: '',
      estado_id: this.idEstado,
      date_create: ''
    };
  }

  salvarCidade(action): any {
    if (action === 'Criar') {
      return this.createCidade();
    }
    return this.updateCidade();
  }

  createCidade(): void {
    this.cidade.estado_id = this.idEstado;
    this.cidadesService.createCidade(this.cidade).subscribe(
      response => {
        this.clearCidade();
        this.listarCidades();
      },
      error => {
        console.error(error);
      });
  }

  updateCidade(): void {
    this.cidade.estado_id = this.idEstado;
    this.cidadesService.updateCidade(this.cidade._id, this.cidade).subscribe(
      response => {
        this.clearCidade();
        this.listarCidades();
      },
      error => {
        console.error(error);
      });
  }

  editarCidade(cidade): void {
    this.cidade = {
      _id: cidade._id,
      nome: cidade.nome,
      abreviacao: cidade.estado_id,
      date_create: cidade.date_create
    };
    this.showChildModal('Atualizar');
  }

  apagarCidade(id: string): void {
    this.cidadesService.deleteCidade(id).subscribe(
      response => {
        this.listarCidades();
      },
      error => {
        console.error(error);
      });
  }

  pesquisarCidade() {
    let query = 'nome=' + this.buscaCidade;
    clearTimeout(this.delay);
    this.delay = setTimeout(() => {
      this.listarCidades(query);
    }, 500);
  }

  showChildModal(action: string): void {
    this.action = action;
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

}
