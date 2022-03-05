const products = [
  {
    id: generateUniqueId(),
    name: 'River',
    description: 'Lorems mustaford',
    images: [
      'https://picsum.photos/id/237/200/200',
      'https://picsum.photos/id/2/200/200'
    ],
    base_price_in_USD: 0,
    discount: 0,
    variations: [
      {
        variation_key: 'RAM',
        variation_price_list: [
          {
            value: '16GB',
            price_in_USD: 10
          },
          {
            value: '32GB',
            price_in_USD: 45
          }
        ]
      },
      {
        variation_key: 'Screen Size',
        variation_price_list: [
          {
            value: '13 inch',
            price_in_USD: 10
          },
          {
            value: '15 inch',
            price_in_USD: 20
          }
        ]
      }
    ]
  },
  {
    id: generateUniqueId(),
    name: 'Lelani',
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/2/200/200'],
    base_price_in_USD: 17,
    discount: 0.1,
    variations: []
  },
  {
    id: generateUniqueId(),
    name: 'Tuyer',
    description: 'Lorems mustaford',
    images: [
      'https://picsum.photos/id/249/200/200',
      'https://picsum.photos/id/2/200/200'
    ],
    base_price_in_USD: 0,
    discount: 0.05,
    variations: [
      {
        variation_key: 'Addons',
        variation_price_list: [
          {
            value: 'Charger',
            price_in_USD: 120
          },
          {
            value: 'Headsets',
            price_in_USD: 450
          }
        ]
      },
      {
        variation_key: 'Screen Size',
        variation_price_list: [
          {
            value: '13 inch',
            price_in_USD: 10
          },
          {
            value: '15 inch',
            price_in_USD: 20
          }
        ]
      }
    ]
  },
  {
    id: generateUniqueId(),
    name: 'Carston',
    description: 'Lorems mustaford',
    images: [
      'https://picsum.photos/id/33/200/200',
      'https://picsum.photos/200'
    ],
    base_price_in_USD: 50,
    discount: 0,
    variations: [
      {
        variation_key: 'Size',
        variation_price_list: [
          {
            value: 'S',
            price_in_USD: 0
          },
          {
            value: 'M',
            price_in_USD: 0
          },
          {
            value: 'L',
            price_in_USD: 0
          }
        ]
      }
    ]
  },
  {
    id: generateUniqueId(),
    name: 'Ramy',
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/21/200/200'],
    base_price_in_USD: 0,
    discount: 0.15,
    variations: [
      {
        variation_key: 'Color',
        variation_price_list: [
          {
            value: 'Blue',
            price_in_USD: 0
          },
          {
            value: 'Black',
            price_in_USD: 0
          }
        ]
      },
      {
        variation_key: 'Size',
        variation_price_list: [
          {
            value: 'Micro USB',
            price_in_USD: 30
          },
          {
            value: 'Type-c',
            price_in_USD: 50
          },
          {
            value: 'Type-b',
            price_in_USD: 70
          }
        ]
      }
    ]
  },
  {
    id: generateUniqueId(),
    name: 'Lua',
    description: 'Lorems mustaford',
    images: [
      'https://picsum.photos/id/23/200/200',
      'https://picsum.photos/id/24/200/200'
    ],
    base_price_in_USD: 100,
    discount: 0,
    variations: []
  },
  {
    id: generateUniqueId(),
    name: 'Gope',
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/25/200/200'],
    base_price_in_USD: 12,
    discount: 0.3,
    variations: []
  }
]

function generateUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export { products }
