import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import TourDatePreview from './preview-templates/TourDatePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import MusicPagePreview from './preview-templates/MusicPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('tour', TourDatePreview);
CMS.registerPreviewTemplate('music', MusicPagePreview);
