// import widget/custom components
import { CollageGallery } from 'widgets';

export const ImageGrid2 = () => {
    const images = [
        '/images/avatar/avatar-1.jpg',
        '/images/avatar/avatar-3.jpg',
        '/images/avatar/avatar-2.jpg',
        '/images/avatar/avatar-4.jpg',
        '/images/avatar/avatar-5.jpg',
        '/images/avatar/avatar-7.jpg',
        '/images/avatar/avatar-6.jpg',
        '/images/avatar/avatar-8.jpg',
        '/images/avatar/avatar-10.jpg',
        '/images/avatar/avatar-11.jpg',
        '/images/avatar/avatar-12.jpg',
        '/images/avatar/avatar-13.jpg',
        '/images/avatar/avatar-14.jpg'
    ]
    return <CollageGallery images={images} />
}

export const ImageGrid2Code = `
// import widget/custom components
import { CollageGallery } from 'widgets';

export const ImageGrid2Example = () => {
    const images = [
        '/images/avatar/avatar-1.jpg',
        '/images/avatar/avatar-3.jpg',
        '/images/avatar/avatar-2.jpg',
        '/images/avatar/avatar-4.jpg',
        '/images/avatar/avatar-5.jpg',
        '/images/avatar/avatar-7.jpg',
        '/images/avatar/avatar-6.jpg',
        '/images/avatar/avatar-8.jpg',
        '/images/avatar/avatar-10.jpg',
        '/images/avatar/avatar-11.jpg',
        '/images/avatar/avatar-12.jpg',
        '/images/avatar/avatar-13.jpg',
        '/images/avatar/avatar-14.jpg'
    ]
    return <CollageGallery images={images} />
}`.trim();