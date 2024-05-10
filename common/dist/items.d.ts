import { Die } from "./types";
import { Slottable, ItemDisplay } from "./itemDetails";
export declare class Weapon implements Slottable {
    display: ItemDisplay;
    itemClass: string;
    damage: Die;
    constructor(display: ItemDisplay, itemClass: string, damage: Die);
}
export declare class Item implements Slottable {
    display: ItemDisplay;
    constructor(display: ItemDisplay);
}
export declare class Armor implements Slottable {
    display: ItemDisplay;
    defense: number;
    itemClass: string;
    constructor(display: ItemDisplay, defense: number, itemClass: string);
}
export declare class Spell implements Slottable {
    display: ItemDisplay;
    constructor(display: ItemDisplay);
}
export declare class Condition implements Slottable {
    display: ItemDisplay;
    mechanic: string;
    clearCondition: string;
    constructor(display: ItemDisplay, mechanic: string, clearCondition: string);
}
