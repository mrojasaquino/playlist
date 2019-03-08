import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//ng-playlist
export class SongService {

  public songs: Array<object> = null;

  constructor() { }

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
