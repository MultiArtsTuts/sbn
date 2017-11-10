import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  apiLaravel = 'http://172.18.0.6/api/v1/'

  constructor(public http: HttpClient) {}

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCategories(){
    return new Promise(resolve => {
      this.http.get(this.apiLaravel+'categories/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getCatId(item){
    return new Promise(resolve => {
      this.http.get(this.apiLaravel + 'categories/' + item).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getClientId(item){
    return new Promise(resolve => {
      this.http.get(this.apiLaravel + 'clients/' + item).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

}
