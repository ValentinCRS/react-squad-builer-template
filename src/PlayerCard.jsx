import React from 'react';

function PlayerCard({ player, style }) {
  return (
    <div className="player-card" style={style}>
      <div className="rating">{player.rating}</div>
      <div className="position">{player.position}</div>
      <div className="name">{player.name}</div>
      <div className="club">{player.club}</div>
      <div className="nationality">{player.nationality}</div>
    </div>
  );
}

export default PlayerCard;