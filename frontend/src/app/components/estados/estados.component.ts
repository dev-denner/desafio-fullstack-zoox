import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { EstadosService } from '../../services/estados.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @Output() idEstado = new EventEmitter<string>();

  public estados: any;
  public estado: any;
  public action = 'Criar';
  public idActive: string;
  public buscaEstado: string;

  private delay;

  constructor(
    private estadosService: EstadosService
  ) { }

  ngOnInit(): void {
    this.clearEstado();
    this.listarEstados();
  }

  listarEstados(query: string = ''): void {

    this.estadosService.listEstado(null, query).subscribe(
      response => {
        this.estados = response.data;
      },
      error => {
        console.error(error);
      });

  }

  clearEstado(): void {
    this.estado = {
      _id: '',
      nome: '',
      abreviacao: '',
      date_create: ''
    };
  }

  salvarEstado(action): any {
    if (action === 'Criar') {
      return this.createEstado();
    }
    return this.updateEstado();
  }

  createEstado(): void {
    this.estadosService.createEstado(this.estado).subscribe(
      response => {
        this.clearEstado();
        this.listarEstados();
      },
      error => {
        console.error(error);
      });
  }

  updateEstado(): void {
    this.estadosService.updateEstado(this.estado._id, this.estado).subscribe(
      response => {
        this.clearEstado();
        this.listarEstados();
      },
      error => {
        console.error(error);
      });
  }

  verCidade(id: string): void {
    this.idActive = id;
    this.idEstado.emit(id);
  }

  editarEstado(estado): void {
    this.estado = {
      _id: estado._id,
      nome: estado.nome,
      abreviacao: estado.abreviacao,
      date_create: estado.date_create
    };
    this.showChildModal('Atualizar');
  }

  apagarEstado(id: string): void {
    this.estadosService.deleteEstado(id).subscribe(
      response => {
        this.listarEstados();
      },
      error => {
        console.error(error);
      });
  }

  pesquisarEstado() {
    let query = 'nome=' + this.buscaEstado;
    clearTimeout(this.delay);
    this.delay = setTimeout(() => {
      this.listarEstados(query);
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
