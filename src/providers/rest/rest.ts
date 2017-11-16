import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  apiLaravel = 'http://192.168.10.103/api/v1/'

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

  // Slide Client Home
  getClients(){
    return new Promise(resolve => {
      this.http.get(this.apiLaravel + 'featured/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }


}
