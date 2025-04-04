'use client';

// import node module libraries
import { Col, Row } from 'react-bootstrap';
import { Fragment } from 'react';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { FlushTabContent, FlushTabContentCode } from './components/FlushTab';
import { ListGroupsCard, ListGroupsCardCode } from '../cards/components/ListGroupsCard';

const AccordionsSnippets = () => {

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
            hrefID: 'faq',
            title: 'FAQs',
            tabContent: <FlushTabContent />,
            codeContent: FlushTabContentCode
        },
        {
            hrefID: 'list-groups-card',
            title: 'List Groups Card',
            tabContent: <ListGroupsCard />,
            codeContent: ListGroupsCardCode
        }
    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Accordion"
                    description="Quickly get a project started with any of our examples of Bootstrap 5 Accordion Snippet."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default AccordionsSnippets