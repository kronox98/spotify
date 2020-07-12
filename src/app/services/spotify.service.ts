import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKA0OOEXCz6kouOQBusNkWz9-Du7ludyjDt1Tb6mMSa0zrAwX7dvVe1OUGr55HglOwRM6Vy57gm54Fo0M'
    })

    return this.http.get(apiUrl + 'browse/new-releases', { headers })       
              .pipe( map( data => {
                return data['albums'].items;
              }))
  }


  getArtist(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKA0OOEXCz6kouOQBusNkWz9-Du7ludyjDt1Tb6mMSa0zrAwX7dvVe1OUGr55HglOwRM6Vy57gm54Fo0M'
    })

    return this.http.get(apiUrl + `search?query=${ termino }&type=artist&offset=0&limit=15`, { headers })
              .pipe( map( data => data['artists'].items));
  }
}
