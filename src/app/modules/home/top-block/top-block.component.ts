import { Component,  ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
declare var iniTopSlider, topBlockBackgoundParallaxInit: any;
@Component({
  selector: 'app-top-block',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBlockComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    iniTopSlider();
    topBlockBackgoundParallaxInit();
  }
  
}
