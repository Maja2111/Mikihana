import { useNavigate } from 'react-router-dom';

export function handleClick(event) {
  event.preventDefault();
}

export const handleViewChange = (setView, selectedView) => {
  setView(selectedView);
  // TODO: Daten für die ausgewählte Ansicht laden
};
