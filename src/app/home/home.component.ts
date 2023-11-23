import { Component, ViewChild } from '@angular/core';
import { AcaoComponent } from '../acao/acao.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
export interface PeriodicElement {
  matricula: number;  
  nome: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricula: 1, nome: 'João', email: 'teste@gmail.com'},
  {matricula: 2, nome: 'Pedro', email: 'teste@gmail.com'},
  {matricula: 3, nome: 'Victor', email: 'teste@gmail.com'},
  {matricula: 4, nome: 'Paula', email: 'teste@gmail.com'},
  {matricula: 5, nome: 'Gabriela', email: 'teste@gmail.com'},
  {matricula: 6, nome: 'Tereza', email: 'teste@gmail.com'},
  {matricula: 7, nome: 'Maria', email: 'teste@gmail.com'},
  {matricula: 8, nome: 'Paula', email: 'teste@gmail.com'},
  {matricula: 9, nome: 'Fábio', email: 'teste@gmail.com'},
  {matricula: 10, nome: 'Joaquim', email: 'teste@gmail.com'}, 
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],   
  
})

export class HomeComponent {
deleteElement(arg0: any) {
throw new Error('Method not implemented.');
}
openDialog(element: PeriodicElement | null): void {
  const dialogRef = this.dialog.open(AcaoComponent, {
    width: '250px',
    data: element === null ? {
      matricula: null,
      nome: null,
      email: null,
    }:{
      matricula: element.matricula,
      nome: element.nome,
      email: element.email
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result !== undefined) {
      if(this.dataSource.map(p => p.matricula).includes(result.matricula)) {
        this.dataSource[result.matricula -1] =result;
        this.table.renderRows();
      }else{
        this.dataSource.push(result);
        this.table.renderRows();
      }
    }
  });
}

  @ViewChild(MatTable)
  table!:MatTable<any>;

  displayedColumns: string[] = ['matricula', 'nome', 'email', 'acao'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  editElement(element: PeriodicElement): void {
    this.openDialog(element);
  }
  deletElement(position: number): void{
    this.dataSource = this.dataSource.filter(p => p.matricula !== position);
  }

}
