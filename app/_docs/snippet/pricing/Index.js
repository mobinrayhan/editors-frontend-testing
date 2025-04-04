'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Pricing1, Pricing1Code } from './components/Pricing1';
import { Pricing2, Pricing2Code } from './components/Pricing2';

const PricingSnippets = () => {
    const SnippetSection = ({ item }) => {
        return (
            <Fragment>
                <div id={item.hrefID}></div>
                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">{item.title}</h2>
                        </div>
                        <GKTabs
                            tabs={[
                                { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: item.tabContent },
                                { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={item.codeContent} /> }
                            ]}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    const SnippetSectionData = [
        {
            hrefID: 'pricing-table-1',
            title: 'Pricing Table #1',
            tabContent: <Pricing1 />,
            codeContent: Pricing1Code
        },
        {
            hrefID: 'pricing-table-2',
            title: 'Pricing Table #2',
            tabContent: <Pricing2 />,
            codeContent: Pricing2Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Pricing"
                    description="We have plans and prices is perfect for business owners. Its easy to edit and customize."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default PricingSnippets