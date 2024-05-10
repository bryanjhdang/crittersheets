import { Attribute, Pips } from "./types";
import { Inventory } from "./inventory";
export declare class stats {
    id: number;
    lastModified: Date;
    name: string;
    str: Attribute;
    dex: Attribute;
    wil: Attribute;
    hp: Attribute;
    pips: Pips;
    birthsign: string;
    coat: string;
    detail: string;
    background: string;
    level: number;
    xp: number;
    grit: number;
    inventory: Inventory;
    constructor(id: number, lastModified: Date, name: string, str: Attribute, dex: Attribute, wil: Attribute, hp: Attribute, pips: Pips, birthsign: string, coat: string, detail: string, background: string, level: number, xp: number, grit: number, inventory: Inventory);
}
