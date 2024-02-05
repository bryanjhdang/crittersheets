export class Attribute {
    public max: number;
    public current: number;

    constructor(value: number) {
        this.max = value;
        this.current = value;
    }
}