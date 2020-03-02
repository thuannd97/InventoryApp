import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  headers: HttpHeaders = new HttpHeaders({
    "Authorization": "Bearer {BQCeKIPsR8KjPOD95eSJmqMrV98UE2GVmauk_eAIKlHvvvRL8_J2Mm_Hua5sowvDhYROveWYXBZ91rZ1ebob4sGUZ_qhmgfMXBymQQyJwwJ6S6pWGVoDi0SN_WAFZe8AeKFeaMuUkXVxITlkueYzcWINJP1_m-ca_zmaHW69wxn9d1RVno0bpQVVG8TTgDU-HfMVuAGQ3TP1Quns8axGuNXa3FJ6JUwJioPjr5h18IU8Q2F_jFQx0KE6a85MG_feDcme4JPJ2XKRP_Ky9W8t4CTEV4WLNg}"
  });

  constructor(private http: HttpClient, @Inject("API_KEY") apiKey: string, @Inject("OAUTH_KEY") oAuthKey: string) { }

  searchTrack(query: string){
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join("&");
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(new HttpRequest(
      'GET',
      queryURL,
      {
        headers: this.headers
      }
    ))
  }

}
