import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private baseUrl:string='http://localhost:9001/restcountries.eu/rest/v2';
  private headers = new Headers ({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private country:Country;

  constructor(private http: HttpClient) { }
  
  getAllCountry() {
    return this._http.get(this.baseUrl+'/all',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  
   errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }
 

  getCountry(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCountry(country: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, country);
  }

  updateCountry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCountryList(): Observable<Country[]> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  

  getCountryByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  
 /*
  getItems() {
    return  this._http.get(this.baseUrl+'/items',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getItem(id:Number){

    return this._http.get(this.baseUrl+'/item/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteItem(id:Number){

    return this._http.delete(this.baseUrl+'/item/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }


  addItem(user:User){

    return this._http.post(this.baseUrl+'/items',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
  saveOrUpdateItem(user:User){

    return this._http.put(this.baseUrl+'/item',JSON.stringify(user),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }

  setter(user:User) {
    this.user=user;
  }
   getter() {
   return this.user;
  }
 
 */
  
  
  
  
}
