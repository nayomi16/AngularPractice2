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
//   savePost(pos:POS):Observable<boolean>{
//     return this.http.post('https://jsonplaceholder.typicode.com/posts')
// }
//   deletePos(id:String):Observable<boolean>{
//     return this.http.delete()
// }
//   updatePos(post:POS):Observable<boolean>{
//     return this.http.put("")
// }
//   searchPos(id:String):Observable<POS>{
//     return this.http.get()
//   }


}
