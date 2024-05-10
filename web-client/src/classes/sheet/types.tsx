// see https://www.npmjs.com/package/tiny-types

import { TinyTypeOf } from "tiny-types";

export class Die extends TinyTypeOf<number>() {};

export class Pips extends TinyTypeOf<number>() {};

export class Attribute {
    public max: number;
    public current: number;

    constructor(value: number) {
        this.max = value;
        this.current = value;
    }
}