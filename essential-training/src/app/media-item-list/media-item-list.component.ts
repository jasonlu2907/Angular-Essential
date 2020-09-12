import { Component, OnInit } from '@angular/core';

import { MediaItemService } from '../services/media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {
    // Su dung Observable roi la ko can dung dong nay nua
    // this.mediaItems = this.mediaItemService.get();

    this.mediaItemService.get()
      .subscribe(mediaItems => this.mediaItems = mediaItems);
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
