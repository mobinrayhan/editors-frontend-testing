// import node module libraries
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const DeleteProfile = () => {
    return (
        <Card className="border-0">
            <Card.Header>
                <div className="mb-3 mb-lg-0">
                    <h3 className="mb-0">Delete your account</h3>
                    <p className="mb-0">Delete or Close your account permanently.</p>
                </div>
            </Card.Header>
            <Card.Body>
                <span className="text-danger h4">Warning</span>
                <p>
                    If you close your account, you will be unsubscribed from all your 0
                    courses, and will lose access forever.
                </p>
                <Link href="/" className="btn btn-outline-danger btn-sm">
                    Close My Account
                </Link>
            </Card.Body>
        </Card>
    );
};

export default DeleteProfile;
