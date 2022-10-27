export class Robot {
    id: number;
    isComplete: any;
    constructor(
        public name: string,
        public image: string,
        public strength: number,
        public endurance: number,
        public creationDate: string
    ) {
        this.id = this.idGeneration();
        this.image = `https://robohash.org/${this.id}`;
    }

    idGeneration() {
        const number = +Math.random() * 1000000;
        return number;
    }
}
