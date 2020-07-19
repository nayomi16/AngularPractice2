import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {POS} from "../dto/pos";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PosService {

  constructor(private http:HttpClient) {
  }

  getAllPos():Observable<POS[]>{
    return this.http.get<POS[]>("https://jsonplaceholder.typicode.com/posts");
  }
  savePost(pos:POS):Observable<boolean>{
    return this.http.post<boolean>('https://jsonplaceholder.typicode.com/posts',pos)
}
  deletePos(id:String):Observable<boolean>{
    return this.http.delete<boolean>("https://jsonplaceholder.typicode.com/posts/1")
}
  updatePos(post:POS):Observable<boolean>{
    return this.http.put<boolean>("https://jsonplaceholder.typicode.com/posts/1",post)
}
  searchPos(id:String):Observable<POS>{
    return this.http.get<POS>("https://jsonplaceholder.typicode.com/posts/1")
  }


}
