'use client';

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Hero1, Hero1Code } from './components/Hero1';
import { Hero2, Hero2Code } from './components/Hero2';
import { Hero3, Hero3Code } from './components/Hero3';
import { Hero4, Hero4Code } from './components/Hero4';
import { Hero5, Hero5Code } from './components/Hero5';
import { Hero6, Hero6Code } from './components/Hero6';
import { Hero7, Hero7Code } from './components/Hero7';
import { Hero8, Hero8Code } from './components/Hero8';
import { Hero9, Hero9Code } from './components/Hero9';

const HeroSectionsSnippets = () => {
    const SnippetSection = ({ item }) => {
        return (
            <Fragment>
                <div id={item.hrefID}></div>
                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">{item.title}</h2>
                            <p className='mb-0'>{item.description}</p>
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
            hrefID: 'hero-1',
            title: 'Hero #1',
            tabContent: <Hero1 />,
            codeContent: Hero1Code
        },
        {
            hrefID: 'hero-2',
            title: 'Hero #2',
            tabContent: <Hero2 />,
            codeContent: Hero2Code
        },
        {
            hrefID: 'hero-3',
            title: 'Hero #3',
            tabContent: <Hero3 />,
            codeContent: Hero3Code
        },
        {
            hrefID: 'hero-4',
            title: 'Hero #4',
            tabContent: <Hero4 />,
            codeContent: Hero4Code
        },
        {
            hrefID: 'hero-5',
            title: 'Hero #5',
            tabContent: <Hero5 />,
            codeContent: Hero5Code
        },
        {
            hrefID: 'hero-6',
            title: 'Hero #6',
            tabContent: <Hero6 />,
            codeContent: Hero6Code
        },
        {
            hrefID: 'hero-7',
            title: 'Hero #7',
            tabContent: <Hero7 />,
            codeContent: Hero7Code
        },
        {
            hrefID: 'hero-8',
            title: 'Hero #8',
            tabContent: <Hero8 />,
            codeContent: Hero8Code
        },
        {
            hrefID: 'hero-9',
            title: 'Hero #9',
            tabContent: <Hero9 />,
            codeContent: Hero9Code
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Hero Sections"
                    description="A hero sections is a full screen section typically consisting of a background image, or video, or illustrations, or animations, with text."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default HeroSectionsSnippets