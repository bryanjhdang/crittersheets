declare const Die_base: new (_: number) => {
    value: number;
} & import("tiny-types").TinyType;
export declare class Die extends Die_base {
}
declare const Pips_base: new (_: number) => {
    value: number;
} & import("tiny-types").TinyType;
export declare class Pips extends Pips_base {
}
export declare class Attribute {
    max: number;
    current: number;
    constructor(value: number);
}
export {};
