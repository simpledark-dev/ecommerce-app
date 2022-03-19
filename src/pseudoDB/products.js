const products = [
  {
    id: 'P1',
    name: 'Fashionable Nike Shorts',
    description: 'Lorems mustaford',
    images: [
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/mwesgzfrm6papmdobyro/face-off-womens-lacrosse-shorts-stock-2rOEOP.png',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8330cee-523f-451a-b7a1-671259d3cec5/sportswear-french-terry-shorts-QtrWBF.png'
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
    inStock: 1240,
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
    base_price_in_USD: 17,
    discount: 0.1,
    variations: [],
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
    inStock: 650,
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
    inStock: 789,
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
    inStock: 123,
    upload_time: '2021-12-15 11:30:01'
  },
  {
    id: 'P5',
    name: 'Puma Softride Shoes',
    description: 'Lorems mustaford',
    images: [
      'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333066000_01_a-PUMA-Mens-Enzo-2-Shoes-193249-01?wid=800&hei=800&bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1'
    ],
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
    inStock: 489,
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
    base_price_in_USD: 100,
    discount: 0,
    variations: [],
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
    inStock: 2234,
    upload_time: '2021-11-07 07:30:01'
  },
  {
    id: 'P7',
    name: 'Combo Casual Nike Shoes + Ozelia Adidas Shirt',
    description: 'Lorems mustaford',
    images: [
      'https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Red-Shoes-White-Jeans-Blue-Shirt.jpg'
    ],
    base_price_in_USD: 12,
    discount: 0.3,
    variations: [],
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
    inStock: 985,
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
    base_price_in_USD: 45,
    discount: 0.14,
    variations: [],
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
    inStock: 245,
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
    base_price_in_USD: 30,
    discount: 0.11,
    variations: [],
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
    inStock: 1567,
    upload_time: '2021-09-15 18:40:01'
  },
  {
    id: 'P11',
    name: 'Uniqlo Casual Shirt',
    description: 'Lorems mustaford',
    images: [
      'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/431599/item/goods_69_431599.jpg?width=450&impolicy=quality_70'
    ],
    base_price_in_USD: 30,
    discount: 0.11,
    variations: [],
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
    inStock: 4590,
    upload_time: '2021-09-15 18:40:01'
  }
]

export default products
