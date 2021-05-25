/* eslint-disable prettier/prettier */
import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { isSignedIn, rules, permissions } from '../access';

import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'ataire',
};

export const ProductImage = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: permissions.canManageProducts,
    delete: permissions.canManageProducts,
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source'
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo'}),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product']
    }
  }
});