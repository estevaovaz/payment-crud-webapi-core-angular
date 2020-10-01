import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  //@ViewChild('form') form:NgForm;
  //payment: PaymentDetail;

  constructor(private service:PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
     this.service.formData = {
      Id: 0,
      NomeCartao: '',
      NumeroCartao: '',
      DataExpiracao: '',
      CVV: ''
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.Id == 0)
      this.insertRecord(form);
    else 
      //update
      this.updateRecord(form);
  }

  //ADD
  insertRecord(form: NgForm){  
    this.service.postPaymentDetail()
    .subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Cartão cadastrado com sucesso!', 'Payment Detail');
        this.service.refreshList();
      },
      err => {
        this.toastr.error('Erro ao cadastrar forma de pagamento!', 'Payment Detail');
      }
    ) 
  }

  //UPDATE
  updateRecord(form: NgForm){  
    this.service.putPaymentDetail()
    .subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Cartão atualizado com sucesso!', 'Payment Detail');
        this.service.refreshList();
      },
      err => {
        this.toastr.error('Erro ao atualizar forma de pagamento!', 'Payment Detail');
      }
    ) 
  }
}
