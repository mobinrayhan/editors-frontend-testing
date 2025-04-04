// import node module libraries
import { Col, Container, Row } from "react-bootstrap";
import { GraphUpArrow, Mortarboard, PeopleFill } from "react-bootstrap-icons";

// import widget/custom components
import { FeatureTopIconCard } from "widgets";

export const CardWithIcon = () => {
    const data = [
        {
            id: 1,
            icon: <Mortarboard className="text-primary" size={40} />,
            title: 'Make Education Accessible',
            description: `Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id
            blanvolutpat nunc.`
        },
        {
            id: 2,
            icon: <PeopleFill className="text-primary" size={40} />,
            title: 'Learn and Grow',
            description: `Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.`
        },
        {
            id: 3,
            icon: <GraphUpArrow className="text-primary" size={40} />,
            title: 'Make Education Accessible',
            description: `Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id
            blanvolutpat nunc.`
        }
    ];

    return (
        <section className="py-10 bg-light">
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col md={4} sm={12} key={index}>
                                <FeatureTopIconCard item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export const CardWithIconCode = `
import { Col, Container, Row } from "react-bootstrap";
import { GraphUpArrow, Mortarboard, PeopleFill } from "react-bootstrap-icons";
import { FeatureTopIconCard } from "widgets";

export const CardWithIconExample = () => {
    const data = [
        {
            id: 1,
            icon: <Mortarboard className="text-primary" size={40} />,
            title: 'Make Education Accessible',
            description: 'Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.'
        },
        {
            id: 2,
            icon: <PeopleFill className="text-primary" size={40} />,
            title: 'Learn and Grow',
            description: 'Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.'
        },
        {
            id: 3,
            icon: <GraphUpArrow className="text-primary" size={40} />,
            title: 'Make Education Accessible',
            description: 'Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.'
        }
    ];

    return (
        <section className="py-10 bg-light">
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col md={4} sm={12} key={index}>
                                <FeatureTopIconCard item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}
`.trim();
