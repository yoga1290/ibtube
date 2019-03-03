import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  search(q: string) {
    let queryParams = { q }
    this.router.navigate(['search'], {
        queryParams,
        queryParamsHandling: 'merge'
    });
  }

}
