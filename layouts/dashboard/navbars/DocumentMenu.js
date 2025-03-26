// import node module libraries
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Badge, NavDropdown } from 'react-bootstrap';
import { Files } from 'react-bootstrap-icons';

// import app config file
import { settings } from 'app.config';

// import hooks
import useMounted from 'hooks/useMounted';

const DocumentMenu = () => {
    const hasMounted = useMounted();
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const DocumentationsMenuHTML = () => {
        return (
            <div className="ms-3 lh-3">
                <h5 className="mb-0">Documentation</h5>
                <p className="mb-0 fs-6">Browse the all documentation</p>
            </div>
        )
    }
    const SnippetsMenuHTML = () => {
        return (
            <div className="ms-3 lh-3">
                <h5 className="mb-0">
                    Snippets <Badge bg='primary' className='ms-1'>New</Badge>
                </h5>
                <p className="mb-0 fs-6">Bunch of Snippets</p>
            </div>
        )
    }
    const ChangelogMenuHTML = () => {
        return (
            <div className="ms-3 lh-3">
                <h5 className="mb-0">
                    Changelog <span className="text-primary ms-1">v{settings.app.version}</span>
                </h5>
                <p className="mb-0 fs-6">See what's new</p>
            </div>
        )
    }
    const DocMenuMobile = () => {
        return (
            <NavDropdown
                title="..."
                id="basic-nav-dropdown"
                bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
            >
                <NavDropdown.Item
                    href="/docs/getting-started/introduction"
                    className="py-2 px-3"
                >
                    <div className="d-flex align-items-center">
                        <i className="fe fe-file-text fs-3 text-primary"></i>
                        <DocumentationsMenuHTML />
                    </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                    href="/docs/snippet/introduction"
                    className="py-2 px-3"
                >
                    <div className="d-flex align-items-center">
                        <Files className="fs-3 text-primary" />
                        <SnippetsMenuHTML />
                    </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                    href="/docs/getting-started/changelog"
                    className="py-2 px-3"
                >
                    <div className="d-flex align-items-center">
                        <i className="fe fe-layers fs-3 text-primary"></i>
                        <ChangelogMenuHTML />
                    </div>
                </NavDropdown.Item>
            </NavDropdown>
        )
    }

    const DocMenuDesktop = () => {
        return (
            <NavDropdown
                title="..."
                id="basic-nav-dropdown"
                bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
                show
            >
                <NavDropdown.Item
                    href="/docs/getting-started/introduction"
                    className="py-2 px-3"
                >
                    <div className="d-flex align-items-center">
                        <i className="fe fe-file-text fs-3 text-primary"></i>
                        <DocumentationsMenuHTML />
                    </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                    href="/docs/snippet/introduction"
                    className="py-2 px-3"
                >
                    <div className="d-flex align-items-center">
                        <Files className="fs-3 text-primary" />
                        <SnippetsMenuHTML />
                    </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                    href="/docs/getting-started/changelog"
                    className="py-2 px-3"
                >
                    <div className="d-flex align-items-center">
                        <i className="fe fe-layers fs-3 text-primary"></i>
                        <ChangelogMenuHTML />
                    </div>
                </NavDropdown.Item>
            </NavDropdown>
        )
    }

    return (
        <Fragment>
            {hasMounted && isDesktop ? <DocMenuDesktop /> : <DocMenuMobile />}
        </Fragment>
    )
}

export default DocumentMenu;