import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [] ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showArtist(item) {
    console.log(item);
    let id;
    if (item.type = 'artist') {
       id = item.id;
    } else if (item.type == 'albums') {
      id = item.artist[0].id
    }

    this.router.navigate(['/artist', id]);
    
    
  }

}
