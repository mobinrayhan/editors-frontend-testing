'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Stats1, Stats1Code } from './components/Stats1';
import { Stats2, Stats2Code } from './components/Stats2';
import { Stats3, Stats3Code } from './components/Stats3';
import { Stats4, Stats4Code } from './components/Stats4';
import { Stats5, Stats5Code } from './components/Stats5';
import { Stats6, Stats6Code } from './components/Stats6';

const StatsSnippets = () => {
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
            hrefID: 'stats-1',
            title: 'Stats #1',
            tabContent: <Stats1 />,
            codeContent: Stats1Code
        },
        {
            hrefID: 'stats-2',
            title: 'Stats #2',
            tabContent: <Stats2 />,
            codeContent: Stats2Code
        },
        {
            hrefID: 'stats-3',
            title: 'Stats #3',
            tabContent: <Stats3 />,
            codeContent: Stats3Code
        },
        {
            hrefID: 'stats-4',
            title: 'Stats #4',
            tabContent: <Stats4 />,
            codeContent: Stats4Code
        },
        {
            hrefID: 'stats-5',
            title: 'Stats #5',
            tabContent: <Stats5 />,
            codeContent: Stats5Code
        },
        {
            hrefID: 'stats-6',
            title: 'Stats #6',
            tabContent: <Stats6 />,
            codeContent: Stats6Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Stats"
                    description="A component that displays content as a stats with numbers."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default StatsSnippets