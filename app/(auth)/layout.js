'use client'

// import node module libraries
import React from 'react';
import { Container } from 'react-bootstrap';

export default function RootLayout({ children }) {
    return (
        <main>
			<section id="db-wrapper">
				<Container className="d-flex flex-column">{children}</Container>
			</section>
		</main>
    )
}