import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router, ActivatedRoute } from '@angular/router';

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
              private route: ActivatedRoute) { 
    
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if(this.query !== ''){
        console.log('query', this.query);
        this.search();
      }
    });            

  }

  ngOnInit(): void {
    console.log('query', this.query);
  }

  search(){
    console.log('this.query', this.query);
    if(!this.query){
      return;
    }
    this.spotifyService.searchTrack(this.query)
    .subscribe((data:any) => {
      console.log('got data:', data);
      this.renderResult(data);
    })
  }

  renderResult(res: any){
    this.results = null;
    if(res && res.body){
      this.results = res.body.tracks.items;
      console.log('results:', res.body.tracks.items);
    }
  }

  submit(query: string){
    this.router.navigate(['search'], {queryParams: {query: query}})
    .then(_ => this.search());
  }

}
