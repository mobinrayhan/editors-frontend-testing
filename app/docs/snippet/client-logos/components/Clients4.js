// import widget/custom components
import { LogosTopHeading } from 'widgets';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

export const Clients4 = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeading title="Featured In" logos={LogoList2} />
        </section>
    )
}

export const Clients4Code = `
import { LogosTopHeading } from 'widgets';
import LogoList2 from 'data/clientlogos/LogoList2';

export const Clients4Example = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeading title="Featured In" logos={LogoList2} />
        </section>
    )
}
`.trim();