import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl = "http://localhost:3000/student";

  addData(product : any){
    return this.httpClient.post(this.apiUrl, product)
  }

  getAllData(){
    return this.httpClient.get(this.apiUrl)
  }

  getById(id: any){
    return this.httpClient.get(this.apiUrl +"/"+ id)
  }

  deleteById(id:any){
    return this.httpClient.delete(this.apiUrl+"/"+ id)
  }

  updateData(product: any){
    return this.httpClient.put(this.apiUrl+"/"+product.id, product)
  }
  
}


