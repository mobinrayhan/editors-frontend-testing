'use client'

// import node module libraries
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// import sub components
import Sidebar from './components/sidebar/Sidebar';
import ChatBox from './components/chatbox/ChatBox';

const Chat = () => {
	const [hideChatBox, setHideChatBox] = useState(false);

	return (
		<Row className="g-0">
			<Col xl={3} lg={12} md={12} xs={12}>
				<Sidebar hideChatBox={hideChatBox} setHideChatBox={setHideChatBox} />
			</Col>
			<Col xl={9} lg={12} md={12} xs={12}>
				<ChatBox hideChatBox={hideChatBox} setHideChatBox={setHideChatBox} />
			</Col>
		</Row>
	);
};

export default Chat;
