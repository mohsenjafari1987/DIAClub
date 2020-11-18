import { Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { PageConfig } from './viewModel/pageConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'diaClub-app';
  pageConfig = new PageConfig(true, 'side', '42px', '42px', 'flat');

  // opened = true;
  // over = 'side';
  // expandHeight = '42px';
  // collapseHeight = '42px';
  // displayMode = 'flat';
  

  //private media: Observable<MediaChange> = new Observable<MediaChange>();

  //overlap = false;

  private watcher: Subscription;
  constructor(media: MediaObserver) {

    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.pageConfig.opened = false;
        this.pageConfig.over = 'over';
      } else {
        this.pageConfig.opened = true;
        this.pageConfig.over = 'side';
      }
    });
  }

}
