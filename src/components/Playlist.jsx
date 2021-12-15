import React from 'react';
import Parasauro from '../images/parasaurolofi.png';
import Ptero from '../images/popteranodon.png';
import Raptor from '../images/velocirocktor.webp';
import PlaylistCard from './PlaylistCard';

function Playlist() {
  return (
    <div className='playlists'>
      <p>Agora escolha seu estilo favorito: </p>
      <div className="cards">
        <PlaylistCard gender={'VelociROCKtor'} image={ Raptor } />
        <PlaylistCard gender={'ParasauroLO-FI'} image={ Parasauro } />
        <PlaylistCard gender={'POPteranodon'} image={ Ptero } />
      </div>
    </div>
  );
}

export default Playlist;