import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private API_KEY='6a5f61f6e13b1ad4dab74efb4346c53f'

  constructor(private http: HttpClient) { }

  searchArtist(artist) {
    const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${this.API_KEY}&format=json`;

    return this.http
      .get<Response>(URL)
      .pipe(
        map(response => {
          console.log('response', response);
          return response['results'].artistmatches.artist;
        })
      ).toPromise();
  }

  getDetails(artist) {
    const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${artist}&api_key=${this.API_KEY}&format=json`;

    return this.http
      .get(URL)
      .toPromise();
  }
}
