// based on items in https://mausritter.com/item-card-studio/

import { Die } from "./types";
import { Slottable, ItemDisplay } from "./itemDetails";

export class Weapon implements Slottable {
    constructor(
        public display: ItemDisplay,
    
        public itemClass: string,
        public damage: Die,
    ) {};
}

export class Item implements Slottable {
    constructor(
        public display: ItemDisplay
    ) {};
}

export class Armor implements Slottable {
    constructor(
        public display: ItemDisplay,

        public defense: number,
        public itemClass: string
    ) {};
}

export class Spell implements Slottable {
    constructor(
        public display: ItemDisplay,
    ) {};
}

export class Condition implements Slottable {
    constructor(
        public display: ItemDisplay,
        public mechanic: string,
        public clearCondition: string,
    ) {};
}