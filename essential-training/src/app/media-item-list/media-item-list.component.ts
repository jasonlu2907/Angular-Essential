import { Component, OnInit } from '@angular/core';

import { MediaItemService, MediaItem } from '../services/media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss'],
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems: MediaItem[];

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {
    // Su dung Observable roi la ko can dung dong nay nua
    // this.mediaItems = this.mediaItemService.get();

    this.getMediaItems(this.medium);
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe((mediaItems) => {
        this.mediaItems = mediaItems;
      });
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
