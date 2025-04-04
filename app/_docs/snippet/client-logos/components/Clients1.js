// import widget/custom components
import { LogosTopBrands } from 'widgets';

// import data files
import BrandLogoList from 'data/clientlogos/BrandLogoList';

export const Clients1 = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopBrands
                title="Learn from founders/operators of top brands."
                logos={BrandLogoList} />
        </section>
    )
}

export const Clients1Code = `
import { LogosTopBrands } from 'widgets';
import BrandLogoList from 'data/clientlogos/BrandLogoList';

export const Clients1Example = () => {
    return (
        <section className='p-4 bg-light'>
            <LogosTopBrands
                title="Learn from founders/operators of top brands."
                logos={BrandLogoList} />
        </section>
    )
}
`.trim();