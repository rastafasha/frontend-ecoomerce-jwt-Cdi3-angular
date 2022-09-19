import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/models/slider';
import { SliderService } from '../../services/slider.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-slidertop',
  templateUrl: './slidertop.component.html',
  styleUrls: ['./slidertop.component.css']
})
export class SlidertopComponent implements OnInit {

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
