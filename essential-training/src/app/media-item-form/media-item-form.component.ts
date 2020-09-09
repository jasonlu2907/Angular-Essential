import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MediaItemService } from '../services/media-item.service';
import { lookupListToken } from '../share/providers';


@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.scss']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  // Inject
  constructor(private fb: FormBuilder,
              private mediaItemService: MediaItemService,
              // @Inject('lookupListToken') public lookupLists,
              @Inject(lookupListToken) public lookupLists) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      medium: this.fb.control('Movies'),
      // Built-on Validator
      name: this.fb.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.fb.control(''),
      year: this.fb.control('', this.yearValidator)
    });
  }

  // Custom Validator
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: {
          min: minYear,
          max: maxYear
        } 
      };
    }
  }

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
  }

}
