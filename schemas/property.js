export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'propertyType',
      title: 'Property type',
      type: 'string',
      options: {
        list: [
          { title: 'House', value: 'house' },
          { title: 'Flat', value: 'flat' },
          { title: 'Bed and Breakfast', value: 'bed-and-breakfast' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'mailImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'propertyImage' }],
    },
    {
      name: 'pricePerNight',
      tutle: 'Proce Per Night',
      type: 'number',
    },
    {
      name: 'beds',
      tutle: 'Beds',
      type: 'number',
    },
    {
      name: 'bedrooms',
      tutle: 'Beedrooms',
      type: 'number',
    },
    {
      name: 'slug',
      tutle: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      tutle: 'ID',
      type: 'number',
    },
    {
      name: 'description',
      tutle: 'Description',
      type: 'string',
    },
    {
      name: 'host',
      tutle: 'host',
      type: 'host',
    },
    {
      name: 'reviews',
      tutle: 'Reviews',
      type: 'array',
      of: [{ type: 'review' }],
    },
  ],
};
