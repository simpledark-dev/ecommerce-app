const products = [
  {
    id: 'P1',
    name: 'Fashionable Nike Shorts',
    description: 'Lorems mustaford',
    images: [
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/mwesgzfrm6papmdobyro/face-off-womens-lacrosse-shorts-stock-2rOEOP.png',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8330cee-523f-451a-b7a1-671259d3cec5/sportswear-french-terry-shorts-QtrWBF.png'
    ],
    discount: 0,
    price_in_usd: null,
    in_stock: null,
    variations: {
      variation_key_values_list: [
        {
          key: 'RAM',
          values: ['16GB', '32GB']
        },
        {
          key: 'Screen Size',
          values: ['13 inch', '15 inch']
        }
      ],
      variations_selection_info: [
        {
          selections: [
            { key: 'RAM', value: '16GB' },
            { key: 'Screen Size', value: '13 inch' }
          ],
          price_in_USD: 20,
          in_stock: 38
        },
        {
          selections: [
            { key: 'RAM', value: '16GB' },
            { key: 'Screen Size', value: '15 inch' }
          ],
          price_in_USD: 30,
          in_stock: 88
        },
        {
          selections: [
            { key: 'RAM', value: '32GB' },
            { key: 'Screen Size', value: '13 inch' }
          ],
          price_in_USD: 55,
          in_stock: 154
        },
        {
          selections: [
            { key: 'RAM', value: '32GB' },
            { key: 'Screen Size', value: '15 inch' }
          ],
          price_in_USD: 65,
          in_stock: 111
        }
      ]
    },
    categories: [
      {
        category_id: 'ca-1',
        values: ['Nike']
      },
      {
        category_id: 'ca-2',
        values: ['Shorts']
      },
      {
        category_id: 'ca-3',
        values: ['USA', 'Canada', 'UK']
      }
    ],
    upload_time: '2021-01-25 14:00:01'
  },
  {
    id: 'P2',
    name: 'Puma Athletic Shorts',
    description: 'Lorems mustaford \n Test test \n Test Test',
    images: [
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333442741_04_a-PUMA-Mens-Cloudspun-Train-Shorts-521037-03?wid=800&hei=800&bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1',
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333381833_10_a-PUMA-Mens-Evostripe-8-Inch-Knit-Shorts-58581502?wid=800&hei=800&bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1'
    ],
    discount: 0.1,
    price_in_USD: 17,
    in_stock: 39,
    variations: null,
    categories: [
      {
        category_id: 'ca-1',
        values: ['Puma']
      },
      {
        category_id: 'ca-2',
        values: ['Shorts']
      }
    ],
    upload_time: '2021-11-15 09:00:01'
  },
  {
    id: 'P3',
    name: 'Adidas Orange Shirt',
    description: 'Lorems mustaford',
    images: [
      'https://i.ebayimg.com/00/s/NDgwWDQ4MA==/z/asQAAOSwq1JZJXhf/$_57.JPG',
      'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0df648add2144e04befdae16016aad28_9366/houston-dynamo-creator-tee.jpg'
    ],
    discount: 0.05,
    price_in_usd: null,
    in_stock: null,
    variations: {
      variation_key_values_list: [
        {
          key: 'Addons',
          values: ['Charger', 'Headsets']
        },
        {
          key: 'Screen Size',
          values: ['13 inch', '15 inch']
        }
      ],
      variations_selection_info: [
        {
          selections: [
            { key: 'Addons', value: 'Charger' },
            { key: 'Screen Size', value: '13 inch' }
          ],
          price_in_USD: 130,
          in_stock: 111
        },
        {
          selections: [
            { key: 'Addons', value: 'Charger' },
            { key: 'Screen Size', value: '15 inch' }
          ],
          price_in_USD: 140,
          in_stock: 32
        },
        {
          selections: [
            { key: 'Addons', value: 'Headsets' },
            { key: 'Screen Size', value: '13 inch' }
          ],
          price_in_USD: 460,
          in_stock: 2
        },
        {
          selections: [
            { key: 'Addons', value: 'Headsets' },
            { key: 'Screen Size', value: '15 inch' }
          ],
          price_in_USD: 470,
          in_stock: 75
        }
      ]
    },
    categories: [
      {
        category_id: 'ca-1',
        values: ['Adidas']
      },
      {
        category_id: 'ca-2',
        values: ['Shirts']
      }
    ],
    upload_time: '2021-12-04 19:30:01'
  },
  {
    id: 'P4',
    name: 'Adidas Running Shoes',
    description: 'Lorems mustaford',
    images: [
      'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg',
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333311910_10_a-adidas-Mens-Response-SR-Running-Shoes-FX3626?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520',
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333453272_10_a-adidas-Mens-Ultra-Boost-21-Running-Shoes-GV7709?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520'
    ],
    discount: 0,
    price_in_usd: null,
    in_stock: null,
    variations: {
      variation_key_values_list: [
        {
          key: 'Size',
          values: ['S', 'M', 'L']
        }
      ],
      variations_selection_info: [
        {
          selections: [{ key: 'Size', value: 'S' }],
          price_in_USD: 50,
          in_stock: 35
        },
        {
          selections: [{ key: 'Size', value: 'M' }],
          price_in_USD: 50,
          in_stock: 111
        },
        {
          selections: [{ key: 'Size', value: 'L' }],
          price_in_USD: 50,
          in_stock: 14
        }
      ]
    },
    categories: [
      {
        category_id: 'ca-1',
        values: ['Adidas']
      },
      {
        category_id: 'ca-2',
        values: ['Shoes']
      },
      {
        category_id: 'ca-3',
        values: ['Canada', 'South Africa', 'France']
      }
    ],
    upload_time: '2021-12-15 11:30:01'
  },
  {
    id: 'P5',
    name: 'Puma Softride Shoes',
    description: 'Lorems mustaford',
    images: [
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333066000_01_a-PUMA-Mens-Enzo-2-Shoes-193249-01?wid=800&hei=800&bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1'
    ],
    discount: 0.15,
    price_in_usd: null,
    in_stock: null,
    variations: {
      variation_key_values_list: [
        {
          key: 'Color',
          values: ['Blue', 'Black']
        },
        {
          key: 'Size',
          values: ['Micro USB', 'Type-c', 'Type-b']
        }
      ],
      variations_selection_info: [
        {
          selections: [
            { key: 'Color', value: 'Blue' },
            { key: 'Size', value: 'Micro USB' }
          ],
          price_in_USD: 30,
          in_stock: 123
        },
        {
          selections: [
            { key: 'Color', value: 'Blue' },
            { key: 'Size', value: 'Type-c' }
          ],
          price_in_USD: 50,
          in_stock: 24
        },
        {
          selections: [
            { key: 'Color', value: 'Blue' },
            { key: 'Size', value: 'Type-b' }
          ],
          price_in_USD: 70,
          in_stock: 55
        },
        {
          selections: [
            { key: 'Color', value: 'Black' },
            { key: 'Size', value: 'Micro USB' }
          ],
          price_in_USD: 30,
          in_stock: 123
        },
        {
          selections: [
            { key: 'Color', value: 'Black' },
            { key: 'Size', value: 'Type-c' }
          ],
          price_in_USD: 50,
          in_stock: 244
        },
        {
          selections: [
            { key: 'Color', value: 'Black' },
            { key: 'Size', value: 'Type-b' }
          ],
          price_in_USD: 70,
          in_stock: 0
        }
      ]
    },
    categories: [
      {
        category_id: 'ca-1',
        values: ['Puma']
      },
      {
        category_id: 'ca-2',
        values: ['Shoes']
      },
      {
        category_id: 'ca-3',
        values: ['Canada', 'USA', 'France']
      }
    ],
    upload_time: '2021-12-05 19:00:01'
  },
  {
    id: 'P6',
    name: 'Red Blazer Nike Shoes',
    description: 'Lorems mustaford',
    images: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fcedb052-0deb-4f3b-9e16-f34717d3fa42/lebron-witness-5-basketball-shoes-XJrPgC.png',
      'https://4.imimg.com/data4/VW/FM/MY-13802834/nike-air-zoom-pegasus-33-red-running-sport-shoes-500x500.jpg',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f955459-6d7f-4c87-8e17-cf0b7ec4f006/air-presto-id-shoe.png'
    ],
    discount: 0,
    price_in_USD: 100,
    in_stock: 329,
    variations: null,
    categories: [
      {
        category_id: 'ca-1',
        values: ['Nestea', 'Nike']
      },
      {
        category_id: 'ca-2',
        values: ['Shoes']
      },
      {
        category_id: 'ca-3',
        values: ['Canada', 'USA', 'New Zealand']
      }
    ],
    upload_time: '2021-11-07 07:30:01'
  },
  {
    id: 'P7',
    name: 'Combo Casual Nike Shoes + Ozelia Adidas Shirt',
    description: 'Lorems mustaford',
    images: [
      'https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Red-Shoes-White-Jeans-Blue-Shirt.jpg'
    ],
    discount: 0.3,
    price_in_USD: 12,
    in_stock: 1329,
    variations: null,
    categories: [
      {
        category_id: 'ca-1',
        values: ['Nike', 'Adidas']
      },
      {
        category_id: 'ca-2',
        values: ['Shoes', 'Shirts']
      },
      {
        category_id: 'ca-3',
        values: ['Singapore', 'Australia']
      }
    ],
    upload_time: '2021-10-05 19:30:01'
  },
  {
    id: 'P8',
    name: 'Dark Nike Shirt',
    description: 'Lorems mustaford',
    images: [
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333171648_01_a-Nike-Mens-Miler-T-Shirt-CU5992-010?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520',
      'https://cdn.shopify.com/s/files/1/1210/9358/products/AR5004_010_SPORTSWEAR_BLACK_WHITE_20-12-15-0294_d606f077-1160-4b98-a6cb-cdbb52e49198_1800x1800.jpg?v=1614719653'
    ],
    discount: 0.14,
    price_in_USD: 45,
    in_stock: 29,
    variations: null,
    categories: [
      {
        category_id: 'ca-1',
        values: ['Nike']
      },
      {
        category_id: 'ca-2',
        values: ['Shirts']
      },
      {
        category_id: 'ca-3',
        values: ['South Africa', 'Australia']
      }
    ],
    upload_time: '2021-10-06 19:10:01'
  },
  {
    id: 'P10',
    name: 'Nike Basketball',
    description: 'Lorems mustaford',
    images: [
      'https://m.media-amazon.com/images/I/51Ik6vGrICL._AC_.jpg',
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332710487_99_a?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a58f1652-c9ee-4ef8-b7cd-7b320d9c78ad/kyrie-skills-basketball-wvw9sq.png',
      'https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw2e7f736f/images/49700301/Rebel_49700301_hi-res.jpg?sw=1000&sh=1000&sm=fit'
    ],
    discount: 0.11,
    price_in_USD: 30,
    in_stock: 229,
    variations: null,
    categories: [
      {
        category_id: 'ca-1',
        values: ['Nike']
      },
      {
        category_id: 'ca-3',
        values: ['USA', 'Singapore']
      }
    ],
    upload_time: '2021-09-15 18:40:01'
  },
  {
    id: 'P11',
    name: 'Uniqlo Casual Shirt',
    description: 'Lorems mustaford',
    images: [
      'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/431599/item/goods_69_431599.jpg?width=450&impolicy=quality_70'
    ],
    discount: 0.11,
    price_in_USD: 30,
    in_stock: 12,
    variations: null,
    categories: [
      {
        category_id: 'ca-1',
        values: ['Uniqlo']
      },
      {
        category_id: 'ca-3',
        values: ['USA', 'UK', 'South Africa', 'Japan']
      }
    ],
    upload_time: '2021-09-15 18:40:01'
  }
]

export default products
