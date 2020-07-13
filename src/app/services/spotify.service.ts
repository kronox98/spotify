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

  query(query: string) {
    const url =  apiUrl + query;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDzczM6oR75dZfCUpSqVnycG9nMEI2UyJuVi9uWBhHEvC_7glGBfn9il__77zLUGUu1C3MdH1nCbBtf9CI'
    }); 
    return this.http.get(url, {headers});
  }

  getToken() {
      return this.http.get('https://accounts.spotify.com/api/token'); 
  }

  getNewReleases() {
    return this.query('browse/new-releases?limit=20')
            .pipe( map( data => {
              return data['albums'].items;
            }));      
  }


  getArtist(termino: string) {
    return this.query(`search?query=${ termino }&type=artist&offset=0&limit=15`)
            .pipe( map( data => data['artists'].items));
  }
}
