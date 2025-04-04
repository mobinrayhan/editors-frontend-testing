'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Clients1, Clients1Code } from './components/Clients1';
import { Clients2, Clients2Code } from './components/Clients2';
import { Clients4, Clients4Code } from './components/Clients4';
import { Clients3, Clients3Code } from './components/Clients3';
import { Clients5, Clients5Code } from './components/Clients5';
import { Clients6, Clients6Code } from './components/Clients6';
import { Clients7, Clients7Code } from './components/Clients7';

const ClientLogosSnippets = () => {
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
            hrefID: 'clients-1',
            title: 'Clients #1',
            tabContent: <Clients1 />,
            codeContent: Clients1Code
        },
        {
            hrefID: 'clients-2',
            title: 'Clients #2',
            tabContent: <Clients2 />,
            codeContent: Clients2Code
        },
        {
            hrefID: 'clients-3',
            title: 'Clients #3',
            tabContent: <Clients3 />,
            codeContent: Clients3Code
        },
        {
            hrefID: 'clients-4',
            title: 'Clients #4',
            tabContent: <Clients4 />,
            codeContent: Clients4Code
        },
        {
            hrefID: 'clients-5',
            title: 'Clients #5',
            tabContent: <Clients5 />,
            codeContent: Clients5Code
        },
        {
            hrefID: 'clients-6',
            title: 'Clients #6',
            tabContent: <Clients6 />,
            codeContent: Clients6Code
        },
        {
            hrefID: 'clients-7',
            title: 'Clients #7',
            tabContent: <Clients7 />,
            codeContent: Clients7Code
        },

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Clients"
                    description="Showcase your clients or products logo using our client logo snippet on your web pages."
                />







                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default ClientLogosSnippets