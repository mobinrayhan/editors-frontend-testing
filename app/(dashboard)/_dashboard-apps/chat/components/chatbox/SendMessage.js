'use client'

// import node module libraries
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

// import chat actions from Redux chatSlice
import { sendMessage } from 'store/chatSlice'

// import utility file
import { getDateValue, getTimeValue } from 'helper/utils';

const SendMessage = () => {
	const [message, setMessage] = useState('Hi');

	// Redux state and dispatch
	const loggedInUserId = useSelector((state) => state.chat.loggedInUserId)
	const activeThread = useSelector((state) => state.chat.activeThread)	
	const dispatch = useDispatch()

	const handleSubmit = () => {
		const dummyMsg = [
			'Hi',
			'Hello !',
			'Hey :)',
			'How do you do?',
			'Are you there?',
			'I am doing good :)',
			'Hi can we meet today?',
			'How are you?',
			'May I know your good name?',
			'I am from codescandy',
			'Where are you from?',
			"What's Up!"
		];
		const date = new Date();
		let newMessage = {
			userId: loggedInUserId,
			message: `${message.replace(/(?:\r\n|\r|\n)/g, '<br>')}`,
			date: getDateValue(date),
			time: getTimeValue(date)
		};
		let payloadData = {id: activeThread.messagesId, newMessage: newMessage }
		if (message) {
			dispatch(sendMessage(payloadData))
		}
		setMessage(dummyMsg[Math.floor(Math.random() * dummyMsg.length)]);
	};
	return (
		<div className="bg-white p-2 rounded-3 shadow-sm">
			<div className="position-relative">
				<Form.Control
					as="textarea"
					placeholder="Type a New Message"
					id="Excerpt"
					value={message}
					onChange={({ target }) => setMessage(target.value)}
					className="form-control border-0 form-control-simple no-resize"
					style={{ height: '40px' }}
				/>
			</div>
			<div className="position-absolute end-0 mt-n7 me-4">
				<Button
					variant="none"
					bsPrefix="btn"
					type="submit"
					className="fs-3 text-primary btn-focus-none"
					onClick={handleSubmit}
				>
					<i className="fe fe-send"></i>
				</Button>
			</div>
		</div>
	);
};
export default SendMessage;
