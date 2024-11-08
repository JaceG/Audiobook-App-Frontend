import { ProgressBar } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
	return (
		<>
			<div className="loader-backdrop">
				<div className="loader">
					<ProgressBar
						visible={true}
						height="80"
						width="80"
						color="#4fa94d"
						ariaLabel="progress-bar-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				</div>
			</div>
		</>
	);
};

export default Loader;
