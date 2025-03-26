'use client';

// import node module libraries
import { Col, Row } from "react-bootstrap";

// import widget/custom components
import { GKTabs, HighlightCode } from "widgets";

// import required sub components and code data
import TypoHeadings, { TypoHeadingsCode } from "./components/TypoHeadings";
import CustomizedHeadings, { CustomizedHeadingsCode } from "./components/CustomizedHeadings";
import DisplayHeadings, { DisplayHeadingsCode } from "./components/DisplayHeadings";
import TypoBodyText, { TypoBodyTextCode } from "./components/TypoBodyText";
import TypoLeadText, { TypoLeadTextCode } from "./components/TypoLeadText";
import InlineText, { InlineTextCode } from "./components/InlineText";
import Blockquotes, { BlockquotesCode } from "./components/Blockquotes";
import NamingASource, { NamingASourceCode } from "./components/NamingASource";
import TypoAlignmentCenter, { TypoAlignmentCenterCode, TypoAlignmentEnd, TypoAlignmentEndCode } from "./components/TypoAlignment";
import ListUnstyled, { ListUnstyledCode } from "./components/ListUnstyled";
import ListInline, { ListInlineCode } from "./components/ListInline";
import ListAlignment, { ListAlignmentCode } from "./components/ListAlignment";
import LetterSpacing, { LetterSpacingCode } from "./components/LetterSpacing";

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { TypographyLinks } from "data/docs/SidebarContentLinks";

const Typography = () => {

    return (
        <DocsInnerLayout links={TypographyLinks}>
            <div className="docs-content mx-xxl-9">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-8" id="intro">
                            <h1 className="mb-2 display-3 fw-bold">Typography</h1>
                            <p className="mb-0 lead">Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>
                        </div>
                    </Col>
                </Row>

                {/* Headings */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="headings" className="mb-4">
                            <h2 className="fw-semibold mb-1">Headings</h2>
                            <p>
                                All HTML headings,  <code className="highlighter-rouge">&lt;h1&gt;</code> through <code className="highlighter-rouge">&lt;h6&gt;</code> , are available.
                            </p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <TypoHeadings /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={TypoHeadingsCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>

                {/* Customizing Headings */}
                <div>
                    <div className="mb-4">
                        <h2 className="fw-semibold mb-1">Customizing headings</h2>
                        <p>Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.</p>
                    </div>
                    <div className="mb-8">
                        <GKTabs
                            tabs={[
                                { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <CustomizedHeadings /> },
                                { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={CustomizedHeadingsCode} /> }
                            ]}
                        />
                    </div>
                </div>

                {/* Display headings */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="display-headings" className="mb-4">
                            <h2 className="fw-semibold mb-1">Display headings</h2>
                            <p>
                                Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out,
                                consider using a <strong>display heading</strong> a larger, slightly more opinionated heading style. Keep in mind these headings are not responsive by default, but it’s possible to enable responsive font sizes.
                            </p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <DisplayHeadings /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={DisplayHeadingsCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Display headings */}

                {/* Body Text */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="body" className="mb-4">
                            <h2 className="fw-semibold mb-1">Body text</h2>
                            <p>The body text or body copy is the text forming the main content.</p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <TypoBodyText /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={TypoBodyTextCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Body Text */}

                {/* Lead Text */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="lead" className="mb-4">
                            <h2 className="fw-semibold mb-1">Lead text</h2>
                            <p>
                                Make a paragraph stand out by adding  <code className="highlighter-rouge">.lead</code>.
                            </p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <TypoLeadText /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={TypoLeadTextCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Lead Text */}

                {/* Inline text elements */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="inline-text-elements" className="mb-4">
                            <h2 className="fw-semibold mb-1">Inline text elements</h2>
                            <p>Styling for common inline HTML5 elements.</p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <InlineText /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={InlineTextCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Inline text elements */}

                {/* Blockquotes */}

                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="blockquotes" className="mb-4">
                            <h2 className="fw-semibold mb-1">Blockquotes</h2>
                            <p>
                                For quoting blocks of content from another source within your document. Wrap <code className="highlighter-rouge">&lt;blockquote
                                    className="blockquote"&gt;</code>  around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.
                            </p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <Blockquotes /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={BlockquotesCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Blockquotes */}

                {/* Naming a source */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="naming-a-source" className="mb-4">
                            <h3 className="fw-semibold mb-1">Naming a source</h3>
                            <p>
                                Add a <code className="highlighter-rouge">&lt;footer className="blockquote-footer"&gt;</code>{' '}
                                for identifying the source. Wrap the name of the source work in  <code className="highlighter-rouge">&lt;cite&gt;</code> .
                            </p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <NamingASource /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={NamingASourceCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Naming a source */}

                {/* Alignment */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="alignment" className="mb-4">
                            <h3 className="fw-semibold mb-1">Alignment</h3>
                            <p>Use text utilities as needed to change the alignment of your blockquote.</p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <TypoAlignmentCenter /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={TypoAlignmentCenterCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Alignment */}

                {/* Alignment-right */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <TypoAlignmentEnd /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={TypoAlignmentEndCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Alignment-right */}

                {/* Lists */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="lists" className="mb-4">
                            <h2 className="fw-semibold mb-1">Lists</h2>
                            <div className="mt-4" id="unstyled">
                                <h3 className="fw-semibold">Unstyled</h3>
                                <p>
                                    Remove the default <code className="highlighter-rouge">list-style</code>{' '}
                                    and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>
                                    , meaning you will need to add the class for any nested lists as well.
                                </p>
                            </div>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <ListUnstyled /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={ListUnstyledCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Lists */}

                {/* Inline */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="inline" className="mb-4">
                            <h2 className="fw-semibold mb-1">Inline</h2>
                            <p>
                                Remove a list’s bullets and apply some light <code className="highlighter-rouge">margin</code>{' '}
                                with a combination of two classes,  <code className="highlighter-rouge">.list-inline</code>{' '}
                                and  <code className="highlighter-rouge">.list-inline-item</code> .
                            </p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <ListInline /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={ListInlineCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Inline */}

                {/* Description list alignment */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="description-list-alignment" className="mb-4">
                            <h2 className="fw-semibold mb-1">Description list alignment</h2>
                            <p>
                                Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a{' '}
                                <code className="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis.
                            </p>
                        </div>
                        <div className="mb-8">
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <ListAlignment /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={ListAlignmentCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
                {/* Description list alignment */}

                {/* Letter Space  */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div id="letterspace" className="mb-4">
                            <h2 className="fw-semibold mb-1">Letter Spacing</h2>
                            <p>
                                Change the letter spacing with <code>.ls-*</code> utilities.
                            </p>
                        </div>
                        <div>
                            <GKTabs
                                tabs={[
                                    { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <LetterSpacing /> },
                                    { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={LetterSpacingCode} /> }
                                ]}
                            />
                        </div>
                    </Col>
                </Row >
                {/* Description list alignment */}
            </div >
        </DocsInnerLayout>
    )
}

export default Typography