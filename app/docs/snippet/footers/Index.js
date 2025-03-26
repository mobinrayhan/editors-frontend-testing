'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Footer1, Footer1Code } from './components/Footer1';
import { Footer2, Footer2Code } from './components/Footer2';
import { Footer3, Footer3Code } from './components/Footer3';
import { Footer4, Footer4Code } from './components/Footer4';
import { Footer5, Footer5Code } from './components/Footer5';
import { Footer6, Footer6Code } from './components/Footer6';
import { Footer7, Footer7Code } from './components/Footer7';

const FootersSnippets = () => {
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
            hrefID: 'footer-1',
            title: 'Footer #1',
            tabContent: <Footer1 />,
            codeContent: Footer1Code
        },
        {
            hrefID: 'footer-2',
            title: 'Footer #2',
            tabContent: <Footer2 />,
            codeContent: Footer2Code
        },
        {
            hrefID: 'footer-3',
            title: 'Footer #3',
            tabContent: <Footer3 />,
            codeContent: Footer3Code
        },
        {
            hrefID: 'footer-4',
            title: 'Footer #4',
            tabContent: <Footer4 />,
            codeContent: Footer4Code
        },
        {
            hrefID: 'footer-5',
            title: 'Footer #5',
            tabContent: <Footer5 />,
            codeContent: Footer5Code
        },
        {
            hrefID: 'footer-6',
            title: 'Footer #6',
            tabContent: <Footer6 />,
            codeContent: Footer6Code
        },
        {
            hrefID: 'footer-7',
            title: 'Footer #7',
            tabContent: <Footer7 />,
            codeContent: Footer7Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Footer"
                    description="Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default FootersSnippets