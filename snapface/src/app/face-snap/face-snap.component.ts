import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import { NgClass, NgStyle, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  hasUserSnapped!: boolean;

  constructor(private facesnapsService : FaceSnapsService){}
  
  ngOnInit() {
    this.snapButtonText = "Oh, snap";
    this.hasUserSnapped = false
  }

  onClickSnap(): void{
    if(this.hasUserSnapped){
      this.facesnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.snapButtonText = "Oh, Snap !"
      this.hasUserSnapped = false;
    }
    else {
      this.facesnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.snapButtonText = "Oops, Unsnap !";
      this.hasUserSnapped = true;
    }
  }
}
