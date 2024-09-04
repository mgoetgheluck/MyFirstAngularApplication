export class FaceSnap {
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    
    location?: string;

    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number){
        this.title = title;
        this.description = description;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.imageUrl = imageUrl;
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    setLocation(location: string): void{
        this.location = location;
    }
}