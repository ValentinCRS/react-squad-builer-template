import React, { useState } from 'react';
import './App.css';
import Pitch from './Pitch';

function App() {
  const [formation, setFormation] = useState('4-2-3-1'); // Formation par défaut

  const players = [
    { id: 1, position: 'GK', rating: 80, name: 'Sesko', club: 'BU', nationality: 'Slovenia' },
    { id: 2, position: 'CB', rating: 79, name: 'Player2', club: 'Club', nationality: 'France' },
    { id: 3, position: 'CB', rating: 83, name: 'Player3', club: 'Club', nationality: 'Brazil' },
    { id: 4, position: 'LB', rating: 78, name: 'Player4', club: 'Club', nationality: 'England' },
    { id: 5, position: 'RB', rating: 82, name: 'Player5', club: 'Club', nationality: 'Spain' },
    { id: 6, position: 'CDM', rating: 80, name: 'Player6', club: 'Club', nationality: 'Germany' },
    { id: 7, position: 'CDM', rating: 81, name: 'Player7', club: 'Club', nationality: 'Italy' },
    { id: 8, position: 'CAM', rating: 85, name: 'Player8', club: 'Club', nationality: 'Portugal' },
    { id: 9, position: 'LM', rating: 77, name: 'Player9', club: 'Club', nationality: 'Netherlands' },
    { id: 10, position: 'RM', rating: 84, name: 'Player10', club: 'Club', nationality: 'Argentina' },
    { id: 11, position: 'ST', rating: 86, name: 'Player11', club: 'Club', nationality: 'Norway' },
  ];

  const changeFormation = (newFormation) => {
    setFormation(newFormation);
  };

  return (
    <div className="App">
      <h1>FC Squad Builder</h1>
      <div className="controls">
        <button onClick={() => changeFormation('4-2-3-1')}>4-2-3-1</button>
        <button onClick={() => changeFormation('4-3-3')}>4-3-3</button>
      </div>
      <Pitch formation={formation} players={players} />
    </div>
  );
}

export default App;