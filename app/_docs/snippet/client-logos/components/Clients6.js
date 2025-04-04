// import widget/custom components
import { LogosTopHeadingOffset } from 'widgets';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

export const Clients6 = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeadingOffset limit={4} offset={2} logos={LogoList2} />
        </section>
    )
}

export const Clients6Code = `
import { LogosTopHeadingOffset } from 'widgets';
import LogoList2 from 'data/clientlogos/LogoList2';

export const Clients6Example = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeadingOffset limit={4} offset={2} logos={LogoList2} />
        </section>
    )
}
`.trim();