import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: any;
  id: string;
  albums: any[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.spotifyService.getAlbum(this.id)
    .subscribe((res: any) =>{
      console.log("album's:", res);
      this.album = res;
    })
    this.spotifyService.getAlbumTrack(this.id)
    .subscribe((res: any) => {
      this.albums = res.items;
    })
  }

}
