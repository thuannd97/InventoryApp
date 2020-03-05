import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  results: Object;

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { 
    
    authService.login();           

    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if(this.query !== ''){
        this.search();
      }
    });            

  }

  ngOnInit(): void {
  }

  search(){
    if(!this.query){
      return;
    }
    this.spotifyService.searchTrack(this.query)
    .subscribe((data:any) => {
      console.log("data:", data);
      this.renderResult(data);
    })
  }

  renderResult(res: any){
    this.results = null;
    if(res && res.tracks){
      this.results = res.tracks.items;
    }
  }

  submit(query: string){
    this.router.navigate(['search'], {queryParams: {query: query}})
    .then(_ => this.search());
  }

}
