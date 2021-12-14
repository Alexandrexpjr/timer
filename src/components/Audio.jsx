import Rex from './audio/Rex.mpeg';

function Video({ isPlaying }) {
  return (
    <div>
      <audio
        src={ Rex } 
        autoPlay={ isPlaying }
      />
    </div>
  );
}

export default Video;

// fonte: https://www.npmjs.com/package/react-player#adding-custom-players