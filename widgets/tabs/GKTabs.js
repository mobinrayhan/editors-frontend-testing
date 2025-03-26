import { Card, Nav, Tab } from 'react-bootstrap'

const GKTabs = ({ tabs = [] }) => {
    return (
        <Tab.Container defaultActiveKey="design">
            <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                    <Nav className="nav-lb-tab">
                        {tabs.map((item) => {
                            return (
                                <Nav.Item key={item.id}>
                                    <Nav.Link eventKey={item.tabKey} className="mb-sm-3 mb-md-0">
                                        {item.tabTitle}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                </Card.Header>
                <Card.Body >
                    <Tab.Content>
                        {tabs.map((item) => {
                            return (
                                <Tab.Pane eventKey={item.tabKey} key={item.id}>
                                    {item.tabData}
                                </Tab.Pane>
                            )
                        })}
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    )
}

export default GKTabs