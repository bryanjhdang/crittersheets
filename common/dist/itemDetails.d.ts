export interface Slottable {
    display: ItemDisplay;
}
export declare class ItemDisplay {
    size: Size;
    uses: Usage;
    name: string;
    imageUrl: string;
    flavour: string;
    constructor(size: Size, uses: Usage, name: string, imageUrl: string, // may replace with a tiny type
    flavour: string);
}
export declare class Size {
    height: number;
    width: number;
    constructor(height: number, width: number);
}
export declare class Usage {
    current: number;
    max: number;
    constructor(current: number, max: number);
}
