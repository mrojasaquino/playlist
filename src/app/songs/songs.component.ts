import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  // instance variables
  public songs:Array<object> = null;

  constructor() { }

  ngOnInit() {
    this.songs = [{
      artist: 'Nirvana',
      name: 'Smells like Teen Spirit',
      url: 'https://www.last.fm/music/Nirvana/_/Smells+Like+Teen+Spirit'
    },{
      artist: 'Kraftwerk',
      name: 'Computer World',
      url: 'https://www.last.fm/music/Kraftwerk/_/Computer+World'
    }];
  }

}
