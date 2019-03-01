import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoId: string = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.videoId) {
        this.videoId = params.videoId
      }
    })
  }

}
