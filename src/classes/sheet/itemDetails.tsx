export interface Slottable {
    display: ItemDisplay;
}

export class ItemDisplay {
    constructor(
        public size: Size,
        public uses: Usage, 
        public name: string,
        public imageUrl: string, // may replace with a tiny type
        public flavour: string
    ) {}
}

export class Size {
    constructor(
        public height: number, 
        public width: number
        ) {};
}


export class Usage {
    constructor(
        public current: number,
        public max: number
    ) {}
}