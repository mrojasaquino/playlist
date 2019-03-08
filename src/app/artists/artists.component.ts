import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  private artist: string = null;
  private artists: Array<object> = null;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  getArtists() {
    this.artistService.searchArtist(this.artist)
      .then((response: Array<Artist>) => {
        this.artists = response;
      });
  }

}
