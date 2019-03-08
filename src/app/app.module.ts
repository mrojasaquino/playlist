import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongService } from './songs/song.service';

import { HttpClientModule } from '@angular/common/http'

import { routing } from './app.routing';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistService } from './artists/artist.service';
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { AlbumsComponent } from './artists/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ArtistsComponent,
    ArtistDetailsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    routing
  ],
  providers: [SongService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
