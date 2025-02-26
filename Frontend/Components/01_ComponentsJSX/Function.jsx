//wird auf allen Mainbuttons benutzt
export function handleClick(event) {
  event.preventDefault();
}

//funktion für die Anzeige der Ergebnisse nah jahr, monate oder tage
export const handleViewChange = (setView, selectedView) => {
  setView(selectedView);
  // TODO: Daten für die ausgewählte Ansicht laden
};
