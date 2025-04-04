'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Features1, Features1Code } from './components/Features1';
import { Features2, Features2Code } from './components/Features2';
import { Features3, Features3Code } from './components/Features3';
import { Features4, Features4Code } from './components/Features4';
import { Features5, Features5Code } from './components/Features5';
import { Features6, Features6Code } from './components/Features6';
import { Features7, Features7Code } from './components/Features7';

const FeaturesSnippets = () => {
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
            hrefID: 'features-1',
            title: 'Features #1',
            tabContent: <Features1 />,
            codeContent: Features1Code
        },
        {
            hrefID: 'features-2',
            title: 'Features #2',
            tabContent: <Features2 />,
            codeContent: Features2Code
        },
        {
            hrefID: 'features-3',
            title: 'Features #3',
            tabContent: <Features3 />,
            codeContent: Features3Code
        },
        {
            hrefID: 'features-4',
            title: 'Features #4',
            tabContent: <Features4 />,
            codeContent: Features4Code
        },
        {
            hrefID: 'features-5',
            title: 'Features #5',
            tabContent: <Features5 />,
            codeContent: Features5Code
        },
        {
            hrefID: 'features-6',
            title: 'Features #6',
            tabContent: <Features6 />,
            codeContent: Features6Code
        },
        {
            hrefID: 'features-7',
            title: 'Features #7',
            tabContent: <Features7 />,
            codeContent: Features7Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Features"
                    description=""
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default FeaturesSnippets