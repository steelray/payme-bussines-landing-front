import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from 'src/app/core/interfaces/video.interface';
import { VIdeoService } from 'src/app/core/services/video.service';
declare var playVideos: any;
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialComponent implements OnInit {
  videos$: Observable<IVideo[]>;
  constructor(
    private videoService: VIdeoService
  ) { }

  ngOnInit(): void {
    this.videos$ = this.videoService.fetchAll({ album: 'tutorial' });
    playVideos();
  }

  trackByFn(index: number): number {
    return index;
  }

}
