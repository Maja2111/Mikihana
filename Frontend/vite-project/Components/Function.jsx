//wird auf allen Mainbuttons benutzt
export function handleClick(event) {
  event.preventDefault();
}

//funktion für die Anzeige der Ergebnisse nah jahr, monate oder tage
export const handleViewChange = (setView, selectedView) => {
  setView(selectedView);
  // TODO: Daten für die ausgewählte Ansicht laden
};

//funktion zum hinzufügen eines Buches
export const handleAddBook = () => {
  // Hier kann die Logik für das Hinzufügen eines neuen Buches implementiert werden
  console.log('Neues Buch hinzufügen');
  // Zum Beispiel: navigate('/add-book');
};
