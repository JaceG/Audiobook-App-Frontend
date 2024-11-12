import { Fragment, useState } from 'react';
import SideBar from './SideBar';
import NavHeader from './NavHeader';
import Header from './Header';
import ChatBox from '../ChatBox';

// eslint-disable-next-line react/prop-types
const NavBlog = ({ title, onClick: ClickToAddEvent }) => {
	const [toggle, setToggle] = useState('');
	const onClick = (name) => setToggle(toggle === name ? '' : name);
	return (
		<Fragment>
			<NavHeader />
			<ChatBox onClick={() => onClick('chatbox')} toggle={toggle} />
			<Header
				onNote={() => onClick('chatbox')}
				onNotification={() => onClick('notification')}
				onProfile={() => onClick('profile')}
				toggle={toggle}
				title={title}
				onBox={() => onClick('box')}
				onClick={() => ClickToAddEvent()}
			/>
			<SideBar />
		</Fragment>
	);
};

export default NavBlog;
