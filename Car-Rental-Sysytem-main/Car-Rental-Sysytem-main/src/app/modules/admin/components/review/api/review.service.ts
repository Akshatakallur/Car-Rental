import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reviewmodel } from '../review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  addreview(data:Reviewmodel){
    return this.http.post<Reviewmodel>("http://localhost:3000/reviews",data,this.httpOptions);
  }

  getreview(){
    return this.http.get<Reviewmodel[]>("http://localhost:3000/reviews");
  }
}