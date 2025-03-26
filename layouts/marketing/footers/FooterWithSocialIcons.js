// import node module libraries
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { Facebook, Github, Twitter } from 'react-bootstrap-icons';

const FooterWithSocialIcons = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Row>
			<Col xl={{ offset: 1, span: 10 }} lg={12} md={12}>
				<Row className="align-items-center mt-6 mb-4">
					<Col md={6} xl={8} lg={8} xs={8}>
						<p className="mb-0">© Geeks-UI. {currentYear} Codescandy.</p>
					</Col>
					<Col
						md={6}
						xl={4}
						lg={4}
						xs={4}
						className="d-flex justify-content-end"
					>
						<Link href="/" target="_blank" className="text-muted text-primary-hover me-3  ">
							<Facebook size={16} />
						</Link>
						<Link href="/" className="text-muted text-primary-hover me-3  ">
							<Twitter size={16} />
						</Link>
						<Link href="/" className="text-muted text-primary-hover">
							<Github size={16} />
						</Link>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
export default FooterWithSocialIcons;
