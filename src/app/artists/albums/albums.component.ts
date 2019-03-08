import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

type Album = {}


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private artistName: String = null;
  public albums: Array<Album> = null;


  constructor(private route : ActivatedRoute, private albumsService : AlbumsService) { }

  getAlbums(artist) {
    this.albumsService
      .getAlbums(artist)
      .then((response: Array<Album>) => this.albums = response);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        const{ artist } = params;
        this.artistName = artist;
        this.getAlbums(artist);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
