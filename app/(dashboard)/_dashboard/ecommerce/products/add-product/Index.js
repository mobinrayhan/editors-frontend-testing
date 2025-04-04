'use client';

// import node module libraries
import { Row, Col, Breadcrumb, Card, Form } from 'react-bootstrap';
import Link from 'next/link';

// import widget/custom components
import { FlatPickr, FormSelect, DropFiles, ReactQuillEditor, GKTagsInput } from 'widgets';

const AddProduct = () => {

    // Category options
    const categoryOptions = [
        { value: 'Shoe', label: 'Shoe' },
        { value: 'Sunglasses', label: 'Sunglasses' },
        { value: 'Handbag', label: 'Handbag' },
        { value: 'Slingbag', label: 'Slingbag' }
    ];

    // Status options
    const statusOptions = [
        { value: 'Published', label: 'Published' },
        { value: 'Unpublished', label: 'Unpublished' },
        { value: 'Draft', label: 'Draft' }
    ];

    return (
        <div>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className="border-bottom pb-3 mb-3 ">
                        <div className="mb-2 mb-lg-0">
                            <h1 className="mb-0 h2 fw-bold"> Add Product </h1>
                            <Breadcrumb>
                                <Breadcrumb.Item to="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item to="#">Ecommerce</Breadcrumb.Item>
                                <Breadcrumb.Item active>Add Product</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8} xs={12}>
                    <Card className="mb-4">
                        <Card.Body>
                            <div>
                                {/* Product Title */}
                                <Form.Group controlId="productTitle" className="mb-3">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Product Title" required />
                                </Form.Group>

                                {/* Product Description */}
                                <Form.Group controlId="productDescription" className="mb-3">
                                    <Form.Label>Product Description</Form.Label>
                                    <ReactQuillEditor initialValue='<p><br/><br/><br/><br/><br/></p>' />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Body>
                            <div>

                                <h4 className="mb-4">Product Gallery</h4>
                                <Form.Group className="mb-4" controlId="productGallery">
                                    <Form.Label className="mb-1">Product Image </Form.Label>
                                    <p>Add Product main Image.</p>
                                    <Form.Control type="file" />
                                </Form.Group>

                                <div>
                                    <h5 className="mb-1">Product Gallery</h5>
                                    <p>Add Product Gallery Images.</p>
                                    <div className="dropzone mt-4 p-4 border-dashed text-center">
                                        <DropFiles />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} xs={12}>
                    <Card className="mb-4">
                        <Card.Body>
                            {/* In Stock */}
                            <Form.Check
                                type="checkbox"
                                label="In Stock"
                                className=" form-switch mb-4"
                                defaultChecked
                            />
                            <div>
                                {/* Product Code */}
                                <Form.Group className="mb-3" controlId="productCode">
                                    <Form.Label className="mb-1">Product Code </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Product Code" />
                                </Form.Group>

                                {/* productSKU */}
                                <Form.Group className="mb-3" controlId="productSKU">
                                    <Form.Label className="mb-1">Product SKU </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Product SKU" />
                                </Form.Group>

                                {/* Gender */}
                                <Form.Group className="mb-3" controlId="Gender">
                                    <Form.Label className="mb-1 d-block">Gender</Form.Label>
                                    <Form.Check inline label="Male" name="Gender" type="radio" id="Gender-1" />
                                    <Form.Check inline label="Female" name="Gender" type="radio" id="Gender-2" />
                                    <Form.Check inline label="Kids" name="Gender" type="radio" id="Gender-3" />
                                </Form.Group>

                                {/* Category */}
                                <Form.Group className="mb-3" controlId="category">
                                    <div className="d-flex justify-content-between">
                                        <Form.Label>Category  </Form.Label>
                                        <Link href="#">Add New</Link>
                                    </div>
                                    <Form.Control as={FormSelect} placeholder="Select Category" options={categoryOptions} />
                                </Form.Group>

                                {/* tag */}
                                <Form.Group className="mb-3" controlId="Tags">
                                    <Form.Label className="mb-1 d-block">Tags</Form.Label>
                                    <Form.Control as={GKTagsInput} placeholder="Enter Tags" />
                                </Form.Group>

                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Body>
                            {/* Status */}
                            <Form.Group className="mb-3" controlId="Status">
                                <Form.Label className="mb-1">Status</Form.Label>
                                <Form.Control as={FormSelect} placeholder="Select Status" options={statusOptions} />
                            </Form.Group>

                            {/* Schedule */}
                            <Form.Group className="mb-3" controlId="Schedule">
                                <Form.Label className="mb-1">Schedule</Form.Label>
                                <div className="input-group me-3  ">
                                    <Form.Control as={FlatPickr} value={''} placeholder='Scheduled Product' />
                                    <span className="input-group-text text-muted" id="basic-addon2">
                                        <i className="fe fe-calendar"></i>
                                    </span>
                                </div>
                            </Form.Group>

                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            {/* Regular Price */}
                            <Form.Group className="mb-3" controlId="regularPrice">
                                <Form.Label className="mb-1">Regular Price</Form.Label>
                                <Form.Control type="text" placeholder="$49.00" />
                            </Form.Group>

                            {/* Sale Price */}
                            <Form.Group className="mb-3" controlId="salePrice">
                                <Form.Label className="mb-1">Sale Price</Form.Label>
                                <Form.Control type="text" placeholder="$49.00" />
                            </Form.Group>

                            {/*  Price includes taxes */}
                            <Form.Check type="checkbox" label=" Price includes taxes" className=" form-switch" defaultChecked />

                        </Card.Body>
                    </Card>
                    {/* button */}
                    <div className="d-grid">
                        <Link href="#" className="btn btn-primary">
                            Create Product
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddProduct