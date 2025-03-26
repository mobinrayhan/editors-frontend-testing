'use client'

// import node module libraries
import React, { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Row, Col, Image, Table, Card, Form } from 'react-bootstrap';

// import widget/custom components
import { GlobalFilter, Pagination, FormSelect } from 'widgets';

// import data files
import QuizResultsData from 'data/marketing/quiz/QuizResultsData';

// import profile layout wrapper
import ProfileLayout from 'layouts/marketing/instructor/ProfileLayout';

const QuizResult = () => {

  const [filtering, setFiltering] = useState('');
  const [rowSelection, setRowSelection] = useState({});

  const sortOptions = [
    { value: 'Free', label: 'Free' },
    { value: 'Newest', label: 'Newest' },
    { value: 'Oldest', label: 'Oldest' }
  ];


  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Students',
        cell: ({ getValue, row }) => {
          return (
            <div className="d-flex align-items-center">
              <Image
                src={row.original.image}
                alt=""
                className="rounded-circle avatar-md me-2"
              />
              <h5 className="mb-0">{getValue()}</h5>
            </div>
          );
        }
      },
      { accessorKey: 'score', header: 'Score' },
      {
        accessorKey: 'attempts', header: 'Attempts',
        cell: ({ getValue }) => {
          return getValue() + ' attempts';
        }
      },
      { accessorKey: 'finishingTime', header: 'Finishing Time' }

    ],
    []
  );

  const data = useMemo(() => QuizResultsData, []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
      rowSelection
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setFiltering,
    debugTable: false,
  })

  const pageSize = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;

  const setFromPage = (recordsPerPage, pageNo) => recordsPerPage * pageNo + 1;
  const setToPage = (recordsPerPage, pageNo, recordsOnCurrentPage) => {
    return recordsOnCurrentPage < recordsPerPage
      ? recordsPerPage * (pageNo + 1) - (recordsPerPage - recordsOnCurrentPage)
      : recordsPerPage * (pageNo + 1);
  };
  return (
    <ProfileLayout>
      <Card className="mb-4">
        <Card.Header>
          <h3 className="mb-0">Result - React Basic Quiz </h3>
        </Card.Header>
        <Card.Body className="border-bottom">
          <Row className="row-cols-lg-3 row-cols-1">
            <Col>
              <Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
                <Card.Body>
                  <h4 className="mb-0">Participate</h4>
                  <div className="mt-5 d-flex justify-content-between align-items-center lh-1">
                    <div>
                      <span className="fs-3 text-dark fw-semi-bold">27</span>
                    </div>
                    <div className="align-middle">
                      <i className="fe fe-users h2 text-danger"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
                <Card.Body>
                  <h4 className="mb-0">Scores</h4>
                  <div className="mt-5 d-flex justify-content-between align-items-center lh-1">
                    <div>
                      <span className="fs-3 text-dark fw-semi-bold">82</span>
                    </div>
                    <div className="align-middle">
                      <i className="fe fe-clipboard h2 text-primary"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
                <Card.Body>
                  <h4 className="mb-0">Average Time</h4>
                  <div className="mt-5 d-flex justify-content-between align-items-center lh-1">
                    <div>
                      <span className="fs-3 text-dark fw-semi-bold">00:00:42</span>
                    </div>
                    <div className="align-middle">
                      <i className="fe fe-clock h2 text-success"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        <Card.Body className="border-bottom">
          <Form className="row">
            <Col lg={9} md={7} xs={12} className="mb-lg-0 mb-2">
              <GlobalFilter
                filtering={filtering}
                setFiltering={setFiltering}
                placeholder="Search " />
            </Col>
            <Col lg={3} md={5} xs={12}>
              <Form.Control
                as={FormSelect}
                placeholder="Sort by"
                options={sortOptions}
              />
            </Col>
          </Form>
        </Card.Body>
        {/* table */}
        <Table hover responsive className="text-nowrap table-centered">
          <thead className='table-light'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}

          </tbody>
        </Table>
        <Card.Footer>
          {/* Pagination */}
          <div className="d-flex align-items-center w-100 justify-content-between">
            <span>Showing {setFromPage(pageSize, pageIndex)} -
              {setToPage(pageSize, pageIndex, pageSize)} of {QuizResultsData.length}{' '} entries
            </span>
            <Pagination table={table} />
          </div>
        </Card.Footer>
      </Card>
    </ProfileLayout>
  )
}

export default QuizResult;
