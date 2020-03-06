import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  track: any;
  id: any; 

  constructor(private spotifyService: SpotifyService, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.id = params['id']
    });
  }

  ngOnInit(): void {
    this.spotifyService.getTrack(this.id)
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
