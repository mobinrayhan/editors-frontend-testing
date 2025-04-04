'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { CTA1, CTA1Code } from './components/CTA1';
import { CTA2, CTA2Code } from './components/CTA2';
import { CTA3, CTA3Code } from './components/CTA3';
import { CTA4, CTA4Code } from './components/CTA4';
import { CTA5, CTA5Code } from './components/CTA5';
import { CTA6, CTA6Code } from './components/CTA6';
import { CTA7, CTA7Code } from './components/CTA7';

const CTAsSnippets = () => {
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
            hrefID: 'cta-1',
            title: 'CTA #1',
            tabContent: <CTA1 />,
            codeContent: CTA1Code
        },
        {
            hrefID: 'cta-2',
            title: 'CTA #2',
            tabContent: <CTA2 />,
            codeContent: CTA2Code
        },
        {
            hrefID: 'cta-3',
            title: 'CTA #3',
            tabContent: <CTA3 />,
            codeContent: CTA3Code
        },
        {
            hrefID: 'cta-4',
            title: 'CTA #4 ',
            tabContent: <CTA4 />,
            codeContent: CTA4Code
        },
        {
            hrefID: 'cta-5',
            title: 'CTA #5',
            tabContent: <CTA5 />,
            codeContent: CTA5Code
        },
        {
            hrefID: 'cta-6',
            title: 'CTA #6',
            tabContent: <CTA6 />,
            codeContent: CTA6Code
        },
        {
            hrefID: 'cta-7',
            title: 'CTA #7',
            tabContent: <CTA7 />,
            codeContent: CTA7Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="CTA"
                    description="Call to action (CTA) is a marketing term for any device designed to prompt an immediate response or encourage an immediate sale."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default CTAsSnippets