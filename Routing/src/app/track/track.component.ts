import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  track: any;

  constructor(private spotifyService: SpotifyService) {

   }

  ngOnInit(): void {
    this.spotifyService.getTrack(this.track.id)
    .subscribe(
      (res: any) => this.renderTrack(res)
    );
  }

  renderTrack(track: any){
    this.track = track;
  }

  back(){
    console.log('back');
  }

}
