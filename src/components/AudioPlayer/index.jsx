import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { StoreContext } from '../../App';

const WebAudioPlayer = ({ ...props }) => {
	const { store } = useContext(StoreContext);
	return (
		<AudioPlayer
			{...props}
			autoPlay
			src={store?.currentAudiobook?.url ?? ''}
		/>
	);
};

export default WebAudioPlayer;
