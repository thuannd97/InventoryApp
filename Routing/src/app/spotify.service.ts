import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  static BASE_URL = "https://api.spotify.com/v1";

  constructor(private http: HttpClient) { }

  query(URl: string, params?: Array<string>): Observable<any>{
    let queryURL = `${SpotifyService.BASE_URL}${URl}`;
    if(params){
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    const header = new HttpHeaders({
      "Authorization": "Bearer BQAObcWPBgwzQstOjh-ipcHk2FFd-5IM-tbK3pVEQeMZ5wT6KdsA64RctjSl9a5euMyDaqI2lKDMRoPIRJQPqqQVqdKgFFV7neDhGRoTMj9okESjHtg9qqeHFv_nCdQTvaBte2O_PWE7ZeMqWHyb-DwFDZfi2O_dx-TLba50wehRgtGks3cgHHnq9su6dilBLei7dmnZnxglknesxD6xUMqTt1NcctJ4fbT6EKiGEbKXFMr1oYo5aDB4ozjDJZYVq2EktGuE62i0XBioJ9XLS0JDn9S-fA"
    });
    const options = {
      headers: header
    }
    console.log("url:", queryURL);
    return this.http.request('GET', queryURL, options);
  }

  search(query: string, type: string): Observable<any>{
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any>{
    return this.search(query, "track");
  }

  getTrack(id: string): Observable<any>{
    return this.query(`/tracks/${id}`);
  }

}
