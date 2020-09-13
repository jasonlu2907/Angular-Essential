import { Component, OnInit } from '@angular/core';

import { MediaItemService, MediaItem } from '../services/media-item.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss'],
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems: MediaItem[];

  constructor(private mediaItemService: MediaItemService,
          private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Su dung Observable roi la ko can dung dòng nay nua
    // this.mediaItems = this.mediaItemService.get();
    // -> this.getMediaItems(this.medium);

    /**De lam viec voi params */
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let medium = paramMap.get('medium');
        if(medium.toLowerCase() === 'all') {
          medium = '';
        }
        this.getMediaItems(medium);
      })
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      //Observable sẽ ko execute cho tới khi component dùng subscribe
      .subscribe((mediaItems) => {
        this.mediaItems = mediaItems;
      });
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }
}
