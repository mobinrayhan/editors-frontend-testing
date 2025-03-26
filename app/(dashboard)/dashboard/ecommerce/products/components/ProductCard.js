// import node module libraries
import { Card, Image } from 'react-bootstrap'
import Link from 'next/link';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// import sub components
import ColorOptions from './ColorOptions'
import ProductCarousel from './ProductCarousel';

const ProductCard = ({ item }) => {
    return (
        <Card className="h-100">
            <div>
                {item.images.length > 1 ? <ProductCarousel images={item.images} /> :
                    <Link href="#">
                        <Image className="img-fluid rounded-top-md w-100" src={item.images[0].image} alt="" />
                    </Link>
                }
                {item.sale && <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-danger">Sale</span>
                </div>}
                {item.new && <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-primary">New</span>
                </div>}
                {item.sale && item.new && <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-danger">Sale</span> <span className="badge bg-primary">New</span>
                </div>}
            </div>
            <Card.Body>
                <div className="mb-4">
                    <h4><Link href="#" className="text-inherit">{item.name}</Link></h4>
                    <span className="fw-semibold">{item.rating.toFixed(2)} </span> <span> <Icon path={mdiStar} size={0.6} className="mb-1 text-warning" /></span>
                </div>
                <div className="d-flex justify-content-between">
                    <h4 className="mb-0">${item.salePrice.toFixed(2)} {' '}
                        {item.sale && <span className="text-muted text-decoration-line-through">${item.mrp.toFixed(2)} </span>}
                    </h4>
                    <ColorOptions colors={item.colors} tags={item.tags} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard