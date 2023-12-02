import { setSortDirection, gerSortDirection } from "../../data.js";


export function renderSortButtons() {
    const sortButtonsContainer = document.createElement('div');
    
    const ascSortButton = document.createElement('button');
    ascSortButton.innerText = '🔼';
    ascSortButton.addEventListener('click', () => {
        setSortDirection('asc');
    });

    const descSortButton = document.createElement('button');
    descSortButton.innerText = '🔽';
    descSortButton.addEventListener('click', () => {
        setSortDirection('desc');
    });

    sortButtonsContainer.appendChild(ascSortButton);
    sortButtonsContainer.appendChild(descSortButton);
    
    if (gerSortDirection() === 'asc') {
        ascSortButton.style.backgroundColor = 'green';
    } else if (gerSortDirection() === 'desc'){
        descSortButton.style.backgroundColor = 'green';
    }


    return sortButtonsContainer;
}