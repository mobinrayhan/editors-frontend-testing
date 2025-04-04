'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Header1, Header1Code } from './components/Header1';
import { Header2, Header2Code } from './components/Header2';
import { Header3, Header3Code } from './components/Header3';
import { Header4, Header4Code } from './components/Header4';
import { Header5, Header5Code } from './components/Header5';
import { Header6, Header6Code } from './components/Header6';
import { Header7, Header7Code } from './components/Header7';
import { Header8, Header8Code } from './components/Header8';

const HeadersSnippets = () => {
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
            hrefID: 'header-1',
            title: 'Header #1',
            tabContent: <Header1 />,
            codeContent: Header1Code
        },
        {
            hrefID: 'header-2',
            title: 'Header #2',
            tabContent: <Header2 />,
            codeContent: Header2Code
        },
        {
            hrefID: 'header-3',
            title: 'Header #3',
            tabContent: <Header3 />,
            codeContent: Header3Code
        },
        {
            hrefID: 'header-4',
            title: 'Header #4',
            tabContent: <Header4 />,
            codeContent: Header4Code
        },
        {
            hrefID: 'header-5',
            title: 'Header #5',
            tabContent: <Header5 />,
            codeContent: Header5Code
        },
        {
            hrefID: 'header-6',
            title: 'Header #6',
            tabContent: <Header6 />,
            codeContent: Header6Code
        },
        {
            hrefID: 'header-7',
            title: 'Header #7',
            tabContent: <Header7 />,
            codeContent: Header7Code
        },
        {
            hrefID: 'header-8',
            title: 'Header #8',
            tabContent: <Header8 />,
            codeContent: Header8Code
        }
    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Headers"
                    description="Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default HeadersSnippets