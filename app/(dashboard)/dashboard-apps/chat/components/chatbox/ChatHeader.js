// import node module libraries
import React, { Fragment } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux'

// import widget/custom components
import { GKTippy } from 'widgets';

// import custom components
import { Avatar } from 'components/bootstrap/Avatar';

// import hook file
import useChatOperations from 'hooks/useChatOperations';

const ChatHeader = (props) => {
	const { hideChatBox, setHideChatBox } = props;

	// Redux state and dispatch
	const loggedInUserId = useSelector((state) => state.chat.loggedInUserId)
	const activeThread = useSelector((state) => state.chat.activeThread)

	const { getGroupDetails, getUserDetailsById } = useChatOperations();

	let ActiveChatInfo =
		activeThread.type === 'user'
			? getUserDetailsById(activeThread.userId)
			: getGroupDetails(activeThread);

	return (
		<div className="bg-white border-top border-bottom px-4 py-3 sticky-top">
			<div className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center">
					<Link
						href="#"
						className="me-2 d-xl-none d-block"
						onClick={() => setHideChatBox(false)}>
						<i className="fe fe-arrow-left"></i>
					</Link>
					{activeThread.type === 'user' ? (
						<Avatar
							size="md"
							className="rounded-circle"
							type={ActiveChatInfo.image ? 'image' : 'initial'}
							src={ActiveChatInfo.image}
							status={ActiveChatInfo.status.toLowerCase()}
							alt={ActiveChatInfo.name}
							name={ActiveChatInfo.name}
						/>
					) : (
						<Fragment>
							{/* 
                            Group Avatar Option 1
                            */}

							<Avatar
								size="md"
								className="rounded-circle"
								type="initial"
								alt={ActiveChatInfo.name}
								name={ActiveChatInfo.name.split(' ').slice(0, 3).join('+')}
							/>

							{/*******************************************
                            Group Avatar Option 2
                            Below code is intentionally commented.
                            It's an alternative avatar view of group chat. 
                            *********************************************/}

							{/* 
                            <Avatar size="md"
                                className="rounded-circle"
                                type={ActiveChatInfo.users[0].image ? "image" : "initial"}
                                src={ActiveChatInfo.users[0].image}
                                status={ActiveChatInfo.users[0].status.toLowerCase()}
                                alt={ActiveChatInfo.users[0].name}
                                name={ActiveChatInfo.users[0].name} />
                            <div className="position-absolute mt-3 ms-n2">
                                <Avatar size="sm"
                                    className="rounded-circle"
                                    type={ActiveChatInfo.users[1].image ? "image" : "initial"}
                                    src={ActiveChatInfo.users[1].image}
                                    alt={ActiveChatInfo.users[1].name}
                                    status={ActiveChatInfo.users[1].status.toLowerCase()}
                                    name={ActiveChatInfo.users[1].name} />
                            </div>  
                            */}
						</Fragment>
					)}
					<div className="ms-2">
						<h4 className="mb-0">{ActiveChatInfo.name}</h4>
						<p className="mb-0 text-muted">
							<span
								className="d-inline-block text-truncate"
								style={{ maxWidth: hideChatBox ? '150px' : 'unset' }}
							>
								{activeThread.type === 'user' ? (
									ActiveChatInfo.status
								) : (
									<Fragment>
										{ActiveChatInfo.users
											.filter((user) => user.id !== loggedInUserId)
											.map((user) => user.name)
											.join(', ')}
										, You
									</Fragment>
								)}
							</span>
						</p>
					</div>
				</div>
				<div>

					<GKTippy content="Voice Call" >
						<Link href="#" className="me-3 text-link texttooltip"><i className="fe fe-phone-call fs-3"></i></Link>
					</GKTippy>

					<GKTippy content="Video Call" >
						<Link href="#" className="me-3 text-link texttooltip"><i className="fe fe-video fs-3"></i></Link>
					</GKTippy>

					<GKTippy content="Add User" >
						<Link href="#" className="me-3 text-link texttooltip"><i className="fe fe-user-plus fs-3"></i></Link>
					</GKTippy>

				</div>
			</div>
		</div>
	);
};
export default ChatHeader;
