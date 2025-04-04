'use client';

// import node module libraries
import { Card, Col, Row } from "react-bootstrap";

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { DarkColors, GrayColors, LightColors, ThemeColorsCode } from "data/docs/ColorsCodeData";

const Colors = () => {
    return (
        <DocsInnerLayout isOpen={false}>
            <div className="docs-content mx-xxl-9">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-8" id="intro">
                            <h1 className="mb-2 fw-bold display-3">Colors</h1>
                            <p className="mb-0 lead">Geeks color design system can help you create a color theme that reflects your brand or style.</p>
                        </div>
                    </Col>
                </Row>
                {/* colors */}
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>

                        {/* Theme Colors */}

                        <div className="mb-4" id="color">
                            <h2 className="fw-semibold mb-0 fw-semibold">Theme Colors</h2>
                        </div>
                        <Card>
                            <Card.Body>
                                <Row className="color-swatches">
                                    {ThemeColorsCode.map((color) => {
                                        return (
                                            <Col key={color.id} xl={3} lg={4} md={4} sm={6} xs={6}>
                                                <div className="color-swatch">
                                                    <div className={"color-swatch-header bg-" + color.colorName.toLowerCase()}></div>
                                                    <div className="color-swatch-body">
                                                        <h5 className="color-swatch-body-label">{color.colorName}</h5>
                                                        <p className="color-swatch-body-value">{color.colorCode}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Light Colors */}

                        <div className="mt-8 mb-4">
                            <h2 className="fw-semibold mb-0 fw-semibold">Light</h2>
                        </div>
                        <Card>
                            <Card.Body>
                                <Row className="color-swatches">
                                    {LightColors.map((color) => {
                                        return (
                                            <Col key={color.id} xl={3} lg={4} md={4} sm={6} xs={6}>
                                                <div className="color-swatch">
                                                    <div className={"color-swatch-header bg-light-" + color.colorName.toLowerCase()}></div>
                                                    <div className="color-swatch-body">
                                                        <h5 className="color-swatch-body-label">{color.colorName}</h5>
                                                        <p className="color-swatch-body-value">{color.colorCode}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Card.Body>
                        </Card>


                        {/* Dark Colors */}

                        <div className="mt-8 mb-4">
                            <h2 className="fw-semibold mb-0 fw-semibold">Dark</h2>
                        </div>
                        <Card>
                            <Card.Body>
                                <Row className="color-swatches">
                                    {DarkColors.map((color) => {
                                        return (
                                            <Col key={color.id} xl={3} lg={4} md={4} sm={6} xs={6}>
                                                <div className="color-swatch">
                                                    <div className={"color-swatch-header bg-dark-" + color.colorName.toLowerCase()}></div>
                                                    <div className="color-swatch-body">
                                                        <h5 className="color-swatch-body-label">{color.colorName}</h5>
                                                        <p className="color-swatch-body-value">{color.colorCode}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Gray Colors */}

                        <div className="mt-8 mb-4">
                            <h2 className="fw-semibold mb-0 fw-semibold">Gray</h2>
                        </div>
                        <Card>
                            <Card.Body>
                                <Row className="color-swatches">
                                    {GrayColors.map((color) => {
                                        return (
                                            <Col key={color.id} xl={3} lg={4} md={4} sm={6} xs={6}>
                                                <div className="color-swatch">
                                                    <div className={"color-swatch-header bg-" + color.colorName.toLowerCase()}></div>
                                                    <div className="color-swatch-body">
                                                        <h5 className="color-swatch-body-label">{color.colorName}</h5>
                                                        <p className="color-swatch-body-value">{color.colorCode}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                {/* colors */}
            </div>
        </DocsInnerLayout>
    )
}

export default Colors