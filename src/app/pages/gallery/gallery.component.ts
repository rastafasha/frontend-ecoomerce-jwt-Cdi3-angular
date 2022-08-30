import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleries: Gallery;
  error: {};

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.galleryService.getGallerys().subscribe(
      (data: Gallery) => this.galleries = data,
      error => this.error = error
    );
    console.log(this.galleries);
  }
}
