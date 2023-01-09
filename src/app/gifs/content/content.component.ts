import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [
  ]
})
export class ContentComponent {
  get results() {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) {}
}
