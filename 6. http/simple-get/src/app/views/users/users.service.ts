import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  /**
   * API DOCUMENTATION
   * https://jsonplaceholder.typicode.com/
   * https://jsonplaceholder.typicode.com/users
   */
  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
