import {updateCard} from "../../data.js";
import {CardNetworkSelect} from "../common/CardNetworkSelect.js";

export function CardEditingDialog(card) {
    const dialog = document.createElement("dialog");
    const cardNumberInput = document.createElement("input");
    cardNumberInput.value = card.number;
    dialog.appendChild(cardNumberInput);

    const networkSelect = CardNetworkSelect(card.networkType);
    dialog.appendChild(networkSelect);

    const button = document.createElement("button");
    button.innerText = "SAVE";
    button.addEventListener("click", function () {
        const newCardNumber = BigInt(cardNumberInput.value);
        updateCard(card.id, newCardNumber, networkSelect.value);
    });
    dialog.appendChild(button);

    return dialog;
}


  
  