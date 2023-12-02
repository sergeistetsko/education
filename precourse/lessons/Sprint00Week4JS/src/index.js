import { subscribe } from "./data.js";
import { renderPlaylist } from "./components/playlist.js";
import { renderFilterPanel } from "./components/filter-panel/filter-panel.js";

const rootElement = document.querySelector("#root");

function renderApp() {
  rootElement.innerHTML = "";
 
  const filterPanelElement = renderFilterPanel();
  rootElement.appendChild(filterPanelElement);

  const songsElement = renderPlaylist();
  rootElement.appendChild(songsElement);
}

renderApp();

subscribe(renderApp);
