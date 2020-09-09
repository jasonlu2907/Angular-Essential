import { Component, OnInit } from '@angular/core';

import { MediaItemService } from '../services/media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems: {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number;
    isFavorite: boolean;
  }[];

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
