import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

//esta anotacion define que es un servicio
@Injectable({
  providedIn: 'root'
})

//nombre de mi aplicación en Last.fm ng-playlist 
export class SongService {

  public songs: Array<object> = null;
  private API_KEY='6a5f61f6e13b1ad4dab74efb4346c53f'

  constructor(private http : HttpClient) { }

  searchSong(song) {
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${song}&api_key=${this.API_KEY}&format=json`;

    return this.http.get(API_URL)
    .pipe(
      map(response => response['results'].trackmatches.track)
    ).toPromise();
  }

  getSongs() {
    return this.songs = [{
      artist: 'Nirvana',
      name: 'Smells like Teen Spirit',
      url: 'https://www.last.fm/music/Nirvana/_/Smells+Like+Teen+Spirit'
    },{
      artist: 'Kraftwerk',
      name: 'Computer World',
      url: 'https://www.last.fm/music/Kraftwerk/_/Computer+World'
    },{
      artist: 'Mike Oldfield',
      name: 'Crisis',
      url: 'https://www.last.fm/music/Mike+Oldfield/_/Crisis'
    },{
      artist: 'Jean-Michel Jarre',
      name: 'Zoolook',
      url: 'https://www.last.fm/music/Jean+Michel+Jarre/_/Zoolook'
    }];
  }

  }
