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

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ArtistsComponent
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
