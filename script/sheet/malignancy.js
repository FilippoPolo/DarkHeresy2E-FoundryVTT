import { DarkHeresyItemSheet } from "./item.js";

export class MalignancySheet extends DarkHeresyItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dark-heresy", "sheet", "malignancy"],
      template: "systems/dark-heresy/template/sheet/malignancy.html",
      width: 500,
      height: 369,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "stats"
        }
      ]
    });
  }

  _getHeaderButtons() {
    let buttons = super._getHeaderButtons();
    buttons = [].concat(buttons);
    return buttons;
  }

  activateListeners(html) {
    super.activateListeners(html);
  }
}
