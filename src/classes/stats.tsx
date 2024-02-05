import { Attribute } from "./attribute";

export class stats {
    constructor(public id: number, 
        public lastModified: number, 
        public name: string,
        public str : Attribute,
        public dex : Attribute,
        public wil : Attribute,
        public hp: Attribute
        ) {};
}