import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { YouTubeSearchService } from '../you-tube-search/you-tube-search.service';
import { SearchResult } from '../you-tube-search/search-result.model';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter((text: string) => text.length > 1)
    .debounceTime(250)
    .do(() => this.loading.emit(true))
    .map((query: string) => this.youtube.search(query))
    .switch().subscribe(
      (results: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results)
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }

}
