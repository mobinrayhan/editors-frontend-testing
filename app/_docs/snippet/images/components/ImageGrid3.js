// import widget/custom components
import { JustifiedGallery } from 'widgets';

export const ImageGrid3 = () => {
    const GalleryImages = [
        { id: 1, image: '/images/about/geeksui-img-1.jpg' },
        { id: 2, image: '/images/about/geeksui-img-2.jpg' },
        { id: 3, image: '/images/about/geeksui-img-3.jpg' },
        { id: 4, image: '/images/about/geeksui-img-4.jpg' },
        { id: 5, image: '/images/about/geeksui-img-5.jpg' },
        { id: 6, image: '/images/about/geeksui-img-6.jpg' }
    ];
    return <JustifiedGallery images={GalleryImages} />;
}

export const ImageGrid3Code = `
// import widget/custom components
import { JustifiedGallery } from 'widgets';

export const ImageGrid3Example = () => {
    const GalleryImages = [
        { id: 1, image: '/images/about/geeksui-img-1.jpg' },
        { id: 2, image: '/images/about/geeksui-img-2.jpg' },
        { id: 3, image: '/images/about/geeksui-img-3.jpg' },
        { id: 4, image: '/images/about/geeksui-img-4.jpg' },
        { id: 5, image: '/images/about/geeksui-img-5.jpg' },
        { id: 6, image: '/images/about/geeksui-img-6.jpg' }
    ];
    return <JustifiedGallery images={GalleryImages} />;
}`.trim();