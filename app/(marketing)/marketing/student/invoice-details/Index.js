'use client'

// import node module libraries
import React, { useRef } from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';

// import sub components
import PrintInvoiceDetails from '../PrintInvoiceDetails';

// import profile layout wrapper
import ProfileLayout from 'layouts/marketing/student/ProfileLayout';

const InvoiceDetails = () => {
	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		contentRef: componentRef,
	});

	return (
		<ProfileLayout>
			<Card>
				<Link
					href="#"
					className="text-muted print-link no-print text-end me-5 mt-3 "
					onClick={handlePrint}>
					<i className="fe fe-printer"></i> Print
				</Link>
				<PrintInvoiceDetails ref={componentRef} />
			</Card>
		</ProfileLayout>
	);
};

export default InvoiceDetails;
