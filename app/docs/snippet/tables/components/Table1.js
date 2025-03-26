// import node module libraries
import { Card } from 'react-bootstrap';

// import widget/custom components
import { GKPositionListTable } from 'widgets';

// import data files
import PositionListData from 'data/marketing/career/PositionListData';

export const Table1 = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className='p-10'>
                {PositionListData.map((item, index) => {
                    return <GKPositionListTable item={item} key={index} />
                })}
            </Card>
        </section>
    )
}


export const Table1Code = `
import { Card } from 'react-bootstrap';
import { GKPositionListTable } from 'widgets';
import PositionListData from 'data/marketing/career/PositionListData';

export const Table1Example = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className='p-10'>
                {PositionListData.map((item, index) => {
                    return <GKPositionListTable item={item} key={index} />
                })}
            </Card>
        </section>
    )
}`.trim();