// import widget/custom components
import { LogosTopHeadingOffset2 } from 'widgets';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

export const Clients7 = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeadingOffset2 limit={5} offset={1} logos={LogoList2} />
        </section>
    )
}

export const Clients7Code = `
import { LogosTopHeadingOffset2 } from 'widgets';
import LogoList2 from 'data/clientlogos/LogoList2';

export const Clients7Example = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopHeadingOffset2 limit={5} offset={1} logos={LogoList2} />
        </section>
    )
}
`.trim();