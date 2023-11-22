import { Component, Inject, OnInit} from '@angular/core';
import {  MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PeriodicElement } from '../home/home.component';



@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {
  element!: PeriodicElement;
  isChange!: boolean;

  constructor(
    
    @Inject(MAT_DIALOG_DATA) 
      public data: PeriodicElement,
       public dialogRef: MatDialogRef<AcaoComponent>,
       
  ) {}
ngOnInit(): void {
  if(this.data.matricula != null) {
    this.isChange = true;
  }else {
    this.isChange = false;
  }
}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
