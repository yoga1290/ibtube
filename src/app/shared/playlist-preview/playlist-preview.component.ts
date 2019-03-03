import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../../../services/models/Playlist';
import * as moment from 'moment'

@Component({
  selector: 'app-playlist-preview',
  templateUrl: './playlist-preview.component.html',
  styleUrls: ['./playlist-preview.component.scss']
})
export class PlaylistPreviewComponent implements OnInit {

  @Input("playlist") playlist: Playlist = null;

  constructor() { }  
  ngOnInit() {
    console.log('PlaylistPreviewComponent', this.playlist)
  }

  fromNow = (isoDate: string) => (moment(isoDate).fromNow())

}
