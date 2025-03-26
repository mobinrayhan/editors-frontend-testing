'use client';

import Link from 'next/link'
import { Card, Col, Image, Row } from 'react-bootstrap'

import { PageHeadingDescription } from 'widgets'

import { IntroductionData } from 'data/docs/snippets/IntroductionData'

const Introduction = () => {

    return (
        <div className="docs-content">

            <PageHeadingDescription
                title="Geeks Snippets"
                description="Geeks Snippets for your next project. Geeks UI comes with huge collection of code snippets of various categories."
            />

            <Row className="mt-4 g-6">
                {IntroductionData.map((item, index) => {
                    return (
                        <Col key={index} xxl={3} xl={4} md={6} xs={12}>
                            <Link className="card card-hover" href={item.link}>
                                <div>
                                    <Image src={item.thumbnail} alt="" className="img-fluid rounded-top" />
                                </div>
                                <Card.Body className="lh-1">
                                    <h4 className="mb-1">{item.componentsName}</h4>
                                    <small>{item.totalComponents} components</small>
                                </Card.Body>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Introduction