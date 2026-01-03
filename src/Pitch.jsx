import React from 'react';
import PlayerCard from './PlayerCard';
import SlidebarLeft from './SlidebarLeft';
import SlidebarRight from './SlidebarRight';

const formations = {
  '4-2-3-1': {
    positions: [
      { class: 'player-gk', grid: 'grid-row: 9 / 11; grid-column: 4 / 6;' }, // GK
      { class: 'player-cb-left', grid: 'grid-row: 7 / 9; grid-column: 2 / 4;' }, // CB gauche
      { class: 'player-cb-right', grid: 'grid-row: 7 / 9; grid-column: 6 / 8;' }, // CB droit
      { class: 'player-lb', grid: 'grid-row: 7 / 9; grid-column: 1 / 2;' }, // LB
      { class: 'player-rb', grid: 'grid-row: 7 / 9; grid-column: 8 / 9;' }, // RB
      { class: 'player-cdm-left', grid: 'grid-row: 5 / 7; grid-column: 3 / 5;' }, // CDM gauche
      { class: 'player-cdm-right', grid: 'grid-row: 5 / 7; grid-column: 5 / 7;' }, // CDM droit
      { class: 'player-cam', grid: 'grid-row: 3 / 5; grid-column: 4 / 6;' }, // CAM
      { class: 'player-lm', grid: 'grid-row: 3 / 5; grid-column: 2 / 4;' }, // LM
      { class: 'player-rm', grid: 'grid-row: 3 / 5; grid-column: 6 / 8;' }, // RM
      { class: 'player-st', grid: 'grid-row: 1 / 3; grid-column: 4 / 6;' }, // ST
    ]
  },
  '4-3-3': {
  positions: [
    // GK
    { class: 'player-gk', grid: 'grid-row: 4; grid-column: 5;' },

    // Défense
    { class: 'player-lb', grid: 'grid-row: 3; grid-column: 2;' },
    { class: 'player-cb-left', grid: 'grid-row: 3; grid-column: 4;' },
    { class: 'player-cb-right', grid: 'grid-row: 3; grid-column: 6;' },
    { class: 'player-rb', grid: 'grid-row: 3; grid-column: 8;' },

    // Milieu
    { class: 'player-cm-left', grid: 'grid-row: 2; grid-column: 3;' },
    { class: 'player-cdm', grid: 'grid-row: 2; grid-column: 5;' },
    { class: 'player-cm-right', grid: 'grid-row: 2; grid-column: 7;' },

    // Attaque
    { class: 'player-lw', grid: 'grid-row: 1; grid-column: 3;' },
    { class: 'player-st', grid: 'grid-row: 1; grid-column: 5;' },
    { class: 'player-rw', grid: 'grid-row: 1; grid-column: 7;' },
  ]
}
};

function Pitch({ formation, players }) {
  const positions = formations[formation]?.positions || [];

  return (
  <>
  <div style={{ display: 'flex', height: '100%', paddingTop: '80px' }}>
    <SlidebarLeft />
  <div className="pitch-wrapper">
    <div className="pitch">
      {players.map((player, index) => {
        const pos = positions[index];
        return (
          <PlayerCard
            key={player.id}
            player={player}
            style={{
              gridRow: pos?.grid.split(';')[0].split(':')[1],
              gridColumn: pos?.grid.split(';')[1].split(':')[1],
            }}
          />
        );
      })}
    </div>
  </div>
  <SlidebarRight />
  </div>
  </>
);

}

export default Pitch;