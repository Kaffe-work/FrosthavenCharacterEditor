import { Action } from "./Action";

export class Ability {
  cardId: number | undefined;
  name: string | undefined;
  initiative: number;
  level: number | string = 0;
  shuffle: boolean;
  actions: Action[];
  lost: boolean = false;
  continuous: boolean = false;
  experience: number |  0;
  bottomActions: Action[];
  bottomLost: boolean = false;
  bottomShuffle: boolean = false;
  hint: string | undefined;
  revealed: boolean = false;

  constructor(cardId: number | undefined = undefined, name: string | undefined = undefined, initiative: number = 0,
    actions: Action[] = [], continuous: boolean = false, experience: number = 0,
    shuffle: boolean = false, bottomActions: Action[] = [], level: number = 0, hint: string | undefined = undefined) {
    this.cardId = cardId;
    this.name = name;
    this.initiative = initiative;
    this.actions = actions;
    this.continuous = continuous;
    this.experience = experience;
    this.shuffle = shuffle;
    this.bottomActions = bottomActions;
    this.level = level;
    this.hint = hint;
  }
}