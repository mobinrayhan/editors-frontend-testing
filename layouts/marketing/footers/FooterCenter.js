// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Twitch, Twitter } from 'react-bootstrap-icons';

const FooterCenter = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="py-lg-10 py-5 bg-white">
			<Container>
				<Row className="justify-content-center text-center  ">
					<Col xl={8} md={12} sm={12} className="px-0 ">
						<nav className="nav nav-footer justify-content-center">
							<Link href="#" className="nav-link">
								About
							</Link>
							<Link href="#" className="nav-link">
								Blog
							</Link>
							<Link href="#" className="nav-link">
								Send feedback
							</Link>
							<Link href="#" className="nav-link">
								Terms & Conditions
							</Link>
							<Link href="#" className="nav-link">
								Get Support
							</Link>
						</nav>
					</Col>
					{/*  Desc  */}
					<Col lg={8} md={12} sm={12}>
						<div className="my-6">
							{/* Facebook */}
							<Link href="#!" className="text-primary me-4">
								<Facebook size={16} />
							</Link>
							{/* Twitter */}
							<Link href="#!" className="text-primary me-4">
								<Twitter size={16} />
							</Link>
							{/* LinkedIn */}
							<Link href="#!" className="text-primary me-4">
								<Linkedin size={16} />
							</Link>
							{/* GitHub */}
							<Link href="#!" className="text-primary me-4">
								<Github size={16} />
							</Link>
							{/* GitHub */}
							<Link href="#!" className="text-primary">
								<Twitch size={16} />
							</Link>
						</div>
					</Col>
					<Col lg={8} md={12} sm={12}>
						<span>© {currentYear}  Geeks-UI, Inc. All Rights Reserved</span>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default FooterCenter;
