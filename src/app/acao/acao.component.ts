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

  constructor(
    
    @Inject(MAT_DIALOG_DATA) 
      public data: PeriodicElement,
       public dialogRef: MatDialogRef<AcaoComponent>,
       
  ) {}
ngOnInit(): void {
}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
