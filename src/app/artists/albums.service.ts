import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

type Response = {
  topalbums: {
    album: Album
  }
};

type Album = {

}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  public albums: Array<object> = null;
  private API_KEY='6a5f61f6e13b1ad4dab74efb4346c53f'

  constructor(private http: HttpClient) { }


  getAlbums(artist) {
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${this.API_KEY}&format=json`;

    return this.http
      .get(API_URL)
      .pipe(
        map((response: Response) => response.topalbums.album)
      ).toPromise();
  }

}
