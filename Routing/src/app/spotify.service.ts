import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  static BASE_URL = "http://api.spotify.com/v1";

  constructor(private http: HttpClient) { }

  query(URl: string, params?: Array<string>): Observable<any>{
    let queryURL = `${SpotifyService.BASE_URL}${URl}`;
    if(params){
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    //const apiKey = environment.spotifyApiKey;
    //const apiKey = "BQCyubIpHW5nGBhv_rTkCq5e3vMWRiesLEWYokx0vQ54RHhJS-8dRbtnGJJ5mo0eZS9bwUgK6mdqgGryBt2GxHeiBVb7pSicXSZABInt1O50Ghm-ciJrHj1G_Y3sfRHEd4lfevkn-CDOiT6seA7WKitzQ-QUhTZ7EWHSIE4b9RdNPGRWj6TQKIKVmtor6jgPqWxJtS2quNDGe2Awy0-Rd7ymrHvu7JzkR79OFINiUcm55oEFEEO9t6TCJWNNHDd5Tcbz9lnOZ2CW5RwS9qE5pgneFOrGsg";
    const header = new HttpHeaders({
      "Authorization": "Bearer {BQCyubIpHW5nGBhv_rTkCq5e3vMWRiesLEWYokx0vQ54RHhJS-8dRbtnGJJ5mo0eZS9bwUgK6mdqgGryBt2GxHeiBVb7pSicXSZABInt1O50Ghm-ciJrHj1G_Y3sfRHEd4lfevkn-CDOiT6seA7WKitzQ-QUhTZ7EWHSIE4b9RdNPGRWj6TQKIKVmtor6jgPqWxJtS2quNDGe2Awy0-Rd7ymrHvu7JzkR79OFINiUcm55oEFEEO9t6TCJWNNHDd5Tcbz9lnOZ2CW5RwS9qE5pgneFOrGsg}"
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
