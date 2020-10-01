import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail
  list: PaymentDetail[];

  //URL BASE
  readonly rootURL = 'http://localhost:60075/api';

  constructor(private http: HttpClient) { }

  //POST - ADD
  postPaymentDetail(){
    return this.http.post(this.rootURL+'/PaymentDetail', this.formData); 
  }

  //PUT
  putPaymentDetail(){
    return this.http.put(this.rootURL+'/PaymentDetail/'+this.formData.Id, this.formData); 
  }

  //DELETE
  deletePaymentDetail(id){
    return this.http.delete(this.rootURL+'/PaymentDetail/'+id); 
  }

  //GET
  refreshList(){
    this.http.get(this.rootURL+'/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
