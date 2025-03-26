// import node module libraries
import { Card } from 'react-bootstrap';

// import widget/custom components
import { LogosTopHeading2 } from 'widgets';

// import data files
import LogoList1 from 'data/clientlogos/LogoList1';

export const Clients2 = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <LogosTopHeading2
                    title="Loved by over 5 million users from companies like"
                    logos={LogoList1}
                />
            </Card>
        </section>
    )
}

export const Clients2Code = `
import { Card } from 'react-bootstrap';
import { LogosTopHeading2 } from 'widgets';
import LogoList1 from 'data/clientlogos/LogoList1';

export const Clients2Example = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <LogosTopHeading2
                    title="Loved by over 5 million users from companies like"
                    logos={LogoList1}
                />
            </Card>
        </section>
    )
}
`.trim();