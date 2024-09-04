import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  hasUserSnapped!: boolean;

  ngOnInit() {
    this.snapButtonText = "Oh, snap";
    this.hasUserSnapped = false
  }

  onClickSnap(): void{
    if(this.hasUserSnapped){
      this.snapButtonText = "Oh, Snap !"
      this.faceSnap.removeSnap();
      this.hasUserSnapped = false;
    }
    else {
      this.snapButtonText = "Oops, Unsnap !";
      this.faceSnap.addSnap();
      this.hasUserSnapped = true;
    }
  }
}
