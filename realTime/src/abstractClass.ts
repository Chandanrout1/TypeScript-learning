abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
    ) {}

    abstract getSepia() : void
    getReelTime(): number{
        return 8
    }
}

class Clicker extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia");
    }
}

const cr = new Clicker("auto", "none", 5)

cr.getReelTime