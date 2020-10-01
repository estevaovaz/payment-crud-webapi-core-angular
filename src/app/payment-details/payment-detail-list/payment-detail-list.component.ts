import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service:PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populatedForm(pd: PaymentDetail){
    this.service.formData = Object.assign({}, pd);
  }

   //DELETE
   remover(id: number){  
    this.service.deletePaymentDetail(id)
    .subscribe(
      res => {       
        this.toastr.warning('Cartão removido com sucesso!', 'Payment Detail');
        this.service.refreshList();
      },
      err => {
        this.toastr.error('Erro ao remover forma de pagamento!', 'Payment Detail');
      }
    ) 
  }


}
