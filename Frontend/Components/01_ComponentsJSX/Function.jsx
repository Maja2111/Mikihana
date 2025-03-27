export function handleClick(event) {
  event.preventDefault();
}

// Funktion für die Anzeige der Ergebnisse nach Jahr, Monate oder Tage

export const handleViewChange = (setView, selectedView) => {
  setView(selectedView);
  // TODO: Daten für die ausgewählte Ansicht laden
};
