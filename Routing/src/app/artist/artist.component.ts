import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  id: string;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.route.params.subscribe(params =>{
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.spotifyService.getArtist(this.id)
    .subscribe(
      (res: any) => {
        console.log('artist', res);
        this.artist = res;
      }
    );
  }

}
