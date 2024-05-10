import { Attribute, Pips } from "./types";
import { Inventory } from "./inventory";

export class stats {
    constructor(public id: number, 
        public lastModified: Date, 
        public name: string,

        public str : Attribute,
        public dex : Attribute,
        public wil : Attribute,
        public hp: Attribute,
        public pips: Pips,

        public birthsign: string,
        public coat: string,
        public detail: string,
        public background: string,
        public level: number,
        public xp: number,
        public grit: number,

        public inventory: Inventory
        ) {};
}