import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit{

  static BASE_URL = "https://api.spotify.com/v1";

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit(){  
  }

  query(URl: string, params?: Array<string>): Observable<any> {
    let queryURL = `${SpotifyService.BASE_URL}${URl}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    let header = new HttpHeaders({
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    return this.http.request('GET', queryURL, options);
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any> {
    return this.search(query, "track");
  }

  getTrack(id: string): Observable<any> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any> {
    return this.query(`/albums/${id}`);
  }

  getAlbumTrack(id: string): Observable<any> {
    return this.query(`/albums/${id}/tracks`);
  }

}
