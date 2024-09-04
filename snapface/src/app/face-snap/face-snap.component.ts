import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  hasUserSnapped!: boolean;

  ngOnInit(): void {
    this.title = "Archibald";
    this.description = "Mon meilleur ami";
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapButtonText = "Oh, snap";
    this.hasUserSnapped = false;
  }

  onClickSnap(): void{
    if(this.hasUserSnapped){
      this.snapButtonText = "Oops, Snap !"
      this.snaps--;
      this.hasUserSnapped = false;
    }
    else {
      this.snapButtonText = "Oh, Unsnap !";
      this.snaps++;
      this.hasUserSnapped = true;
    }
  }
}
