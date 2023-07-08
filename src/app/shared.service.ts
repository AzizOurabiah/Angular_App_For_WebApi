import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44359/";
  readonly PhotoUrl = "https://localhost:44359/Photos"

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/departement')
  }

  addDepartement(val:any){
    return this.http.post(this.APIUrl+'api/departement', val)
  }
  updateDepartement(val: any){
    return this.http.put(this.APIUrl+'departement', val)
  }
  deleteDepartement(val: any){
    return this.http.delete(this.APIUrl+'api/departement', val)
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/employee')
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'api/employee', val)
  }
  updateEmployee(val: any){
    return this.http.put(this.APIUrl+'api/employee', val)
  }
  deleteEmployee(val: any){
    return this.http.delete(this.APIUrl+'api/employee', val)
  }

  uploadPhoto(val: any){
    return this.http.post(this.APIUrl+'api/employee/SaveFile', val)
  }
}
