import { AttackModifier, AttackModifierType } from "./AttackModifier";

export class Perk {

  type: PerkType = PerkType.custom;
  count: number = 0;
  combined: boolean = false;
  custom: string = "";
  cards: PerkCard[] = [];
}

export class PerkCard {
  count: number = 1;
  attackModifier: AttackModifier = new AttackModifier(AttackModifierType.plus0);
}

export enum PerkType {
  add = "add",
  remove = "remove",
  replace = "replace",
  custom = "custom",
}