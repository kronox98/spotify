import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any[]= [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtist(termino)
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
      })
  }

}
