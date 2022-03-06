const products = [
  {
    id: 'P1',
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
    ],
    upload_time: '2021-01-25 14:00:01'
  },
  {
    id: 'P2',
    name: 'Lelani',
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/2/200/200'],
    base_price_in_USD: 17,
    discount: 0.1,
    variations: [],
    upload_time: '2021-11-15 09:00:01'
  },
  {
    id: 'P3',
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
    ],
    upload_time: '2021-12-04 19:30:01'
  },
  {
    id: 'P4',
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
    ],
    upload_time: '2021-12-15 11:30:01'
  },
  {
    id: 'P5',
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
    ],
    upload_time: '2021-12-05 19:00:01'
  },
  {
    id: 'P6',
    name: 'Lua',
    description: 'Lorems mustaford',
    images: [
      'https://picsum.photos/id/23/200/200',
      'https://picsum.photos/id/24/200/200'
    ],
    base_price_in_USD: 100,
    discount: 0,
    variations: [],
    upload_time: '2021-11-07 07:30:01'
  },
  {
    id: 'P7',
    name: 'Gope',
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/25/200/200'],
    base_price_in_USD: 12,
    discount: 0.3,
    variations: [],
    upload_time: '2021-10-05 19:30:01'
  }
]

const reviews = [
  {
    id: 'R8',
    user_id: 'U1',
    product_id: 'P2',
    rating: 4.7,
    review: 'What an amazing product!',
    date_time: '2022-02-28 12:00:12'
  },
  {
    id: 'R7',
    user_id: 'U3',
    product_id: 'P1',
    rating: 5,
    review: "Awesome. I'd rate 5 star!",
    date_time: '2022-02-27 14:10:12'
  },
  {
    id: 'R12',
    user_id: 'U7',
    product_id: 'P2',
    rating: 2,
    review: '',
    date_time: '2022-03-17 04:10:53'
  },
  {
    id: 'R1',
    user_id: 'U2',
    product_id: 'P4',
    rating: 3.5,
    review: 'Decent toy :)',
    date_time: '2022-03-01 14:10:12'
  },
  {
    id: 'R11',
    user_id: 'U2',
    product_id: 'P5',
    rating: 4.2,
    review: 'Good stuff',
    date_time: '2022-03-01 19:20:12'
  },
  {
    id: 'R19',
    user_id: 'U1',
    product_id: 'P6',
    rating: 1,
    review: 'I will never buy this again',
    date_time: '2022-03-02 20:00:00'
  },
  {
    id: 'R182',
    user_id: 'U10',
    product_id: 'P5',
    rating: 5,
    review: '',
    date_time: '2022-03-02 15:00:52'
  }
]

const orders = [
  {
    id: 'O1',
    user_id: 'U2',
    created_date: '2022-03-03 20:00:00',
    processed_date: '2022-03-03 21:00:00',
    fulfilled_date: '2022-03-04 10:00:00',
    status: 'fulfilled',
    order: [
      {
        product_id: 'P1',
        selectedVariations: [
          { variation_key: 'RAM', value: '16GB' },
          { variation_key: 'Screen Size', value: '15 inch' }
        ],
        quantity: 12
      },
      {
        product_id: 'P2',
        quantity: 2
      },
      {
        product_id: 'P7',
        quantity: 3
      }
    ]
  },
  {
    id: 'O2',
    user_id: 'U3',
    created_date: '2022-03-05 10:00:00',
    processed_date: '2022-03-05 11:00:00',
    fulfilled_date: '',
    status: 'in_progress',
    order: [
      {
        product_id: 'P1',
        selectedVariations: [
          { variation_key: 'RAM', value: '32GB' },
          { variation_key: 'Screen Size', value: '13 inch' }
        ],
        quantity: 5
      },
      {
        product_id: 'P2',
        quantity: 4
      }
    ]
  },
  {
    id: 'O3',
    user_id: 'U3',
    created_date: '2022-03-05 11:00:00',
    processed_date: '2022-03-05 13:00:00',
    fulfilled_date: '2022-03-06 05:00:00',
    status: 'fulfilled',
    order: [
      {
        product_id: 'P6',
        quantity: 20
      },
      {
        product_id: 'P7',
        quantity: 10
      }
    ]
  }
]

export { products, reviews, orders }
