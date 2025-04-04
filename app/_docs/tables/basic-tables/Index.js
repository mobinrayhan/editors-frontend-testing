'use client';

// import node module libraries
import { Col, Row } from 'react-bootstrap'

// import widget/custom components
import {
    TableBasic,
    TableDark,
    TableHeadOptions,
    TableStriped,
    TableBordered,
    TableBorderedColor,
    TableBorderless,
    TableHover,
    TableNesting,
    TableActive,
    TableSmall,
    PageHeadingDescription
} from 'widgets';

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required data file
import BasicTableData from 'data/docs/tables/BasicTableData'
import BasicNestedTableData from 'data/docs/tables/BasicNestedTableData';

const BasicTables = () => {
    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Basic Tables"
                    description="HTML tables should be used for tabular data — this is what they are designed for."
                />

                <hr className="mb-6 mt-3" />

                <Row className="row">

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Basic */}
                        <TableBasic TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Dark */}
                        <TableDark TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/*  Table Head Options */}
                        <TableHeadOptions TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Striped */}
                        <TableStriped TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Bordered */}
                        <TableBordered TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Bordered Color */}
                        <TableBorderedColor TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Borderless */}
                        <TableBorderless TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Hover */}
                        <TableHover TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Nesting Table */}
                        <TableNesting TableData={BasicNestedTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Active */}
                        <TableActive TableData={BasicTableData} />
                    </Col>

                    <Col xl={6} xs={12} className="mb-5">
                        {/* Table Small */}
                        <TableSmall TableData={BasicTableData} />
                    </Col>

                </Row>
            </div>
        </DocsInnerLayout>
    )
}

export default BasicTables