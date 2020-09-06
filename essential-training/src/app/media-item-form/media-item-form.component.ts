import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.scss']
})
export class MediaItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
  }

}
