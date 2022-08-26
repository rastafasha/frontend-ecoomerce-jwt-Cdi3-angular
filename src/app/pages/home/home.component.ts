import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/models/slider';
import { SliderService } from 'src/app/services/slider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliders: Slider;

  constructor(
    public sliderService: SliderService,
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.obtenerSliders();
  }

  obtenerSliders(){
    return this.sliderService.getSliders().subscribe(
      resp=>{
        this.sliders = resp;
        console.log(this.sliders);
      }
    )
  }

}
