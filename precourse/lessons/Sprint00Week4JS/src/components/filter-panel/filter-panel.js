import { renderSearchInput } from "./search-input.js";
import { renderSortButtons } from "./sort-buttons.js";

export function renderFilterPanel() {
    const filterPanelElement = document.createElement('div')
    
    filterPanelElement.appendChild(renderSearchInput());

    filterPanelElement.appendChild(renderSortButtons());

    // filterPanelElement.appendChild(renderSearchButton());

    return filterPanelElement;
}




