// import node module libraries
import React from 'react';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import { Modal, ListGroup } from 'react-bootstrap';

// import custom components
import { Avatar } from 'components/bootstrap/Avatar';

const NewChatModal = (props) => {
	const users = useSelector((state) => state.chat.users)
	return (
        <Modal
			{...props}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			scrollable
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create New Chat
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="px-0">
				<ListGroup
					bsPrefix="list-unstyled"
					as="ul"
					className="contacts-list mb-0"
				>
					{users.slice(0, 6).map((item, index) => {
						return (
                            <ListGroup.Item
								as="li"
								bsPrefix=" "
								key={index}
								className="py-3 px-4 chat-item contacts-item"
							>
								<div className="d-flex justify-content-between align-items-center">
									<Link href="#" className="text-link contacts-link">
                                        <div className="d-flex">
                                            <Avatar
                                                size="md"
                                                className="rounded-circle"
                                                type={item.image ? 'image' : 'initial'}
                                                src={item.image}
                                                status={item.status.toLowerCase()}
                                                alt={item.name}
                                                name={item.name}
                                            />
                                            <div className=" ms-2">
                                                <h5 className="mb-0">{item.name}</h5>
                                                <p className="mb-0 text-muted">
                                                    On going description of group...
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
									<div>
										<small className="text-muted">2/10/2021</small>
									</div>
								</div>
							</ListGroup.Item>
                        );
					})}
				</ListGroup>
			</Modal.Body>
		</Modal>
    );
};

export default NewChatModal;
