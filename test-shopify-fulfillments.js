
const rp = require('request-promise');


let fulfillment = {
  line_items:
  [{
    id: 900389011513,
    fullfillable_quantity: 1,
    fullfillment_service: 'manual',
    fullfilment_status: 'fulfilled',
    grams: 0,
    price: '1174.57',
    sku: '100-ST-XL',
    title: 'T-Shirt',
    variant_id: 8352228802617,
    variant_title: null,
    vendor: 'Generic',
    name: 'T-Shirtcolorsize',
    shipment_status: 'confirmed',
    variant_inventory_management: 'shopify',
    properties: [],
    product_exist: true,
    product_id: 818433818681
  },
  {
    id: 900389044281,
    fullfillable_quantity: 2,
    fullfillment_service: 'manual',
    fullfilment_status: 'fulfilled',
    grams: 0,
    price: '1174.57',
    sku: '100-ST-L',
    title: 'T-Shirt',
    variant_id: 8352223559737,
    variant_title: null,
    vendor: 'Generic',
    name: 'T-Shirtcolorsize',
    shipment_status: 'confirmed',
    variant_inventory_management: 'shopify',
    properties: [],
    product_exist: true,
    product_id: 818433818681
  }],
    notify_customer: '',
      order_id: '418082291769',
        status: 'success'
  };


let options = {
  headers: {
    'content-type': 'application/json'
  },
  json: {
    fulfillment
  },
  resolveWithFullResponse: true
};
options.method = 'POST';
options.uri = 'https://aeb5cb4e925c0b8367d08a3b3a90d5bf:7848f3a0780562eadcfa6e73d061c6e9@demoomniumoptimus.myshopify.com/admin/orders/418082291769/fulfillments.json';

rp(options).then((res) => {
  console.log(res.body);
}).catch((error) => {
  console.log(error);
});