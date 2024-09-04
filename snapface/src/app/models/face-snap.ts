import { SnapType } from './snap-type';

export class FaceSnap {
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    
    id: string;
    location?: string;

    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number){
        this.title = title;
        this.description = description;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.imageUrl = imageUrl;
        this.id = crypto.randomUUID().substring(0,8);
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    snap(snapType: SnapType): void{
        if (snapType === 'snap') {
            this.addSnap();
        }
        if (snapType === 'unsnap') {
            this.removeSnap();
        }
    }

    setLocation(location: string): void{
        this.location = location;
    }

    withLocation(location: string): FaceSnap{
        this.setLocation(location);
        return this;
    }
}