import { Product, Clothing, Appliances } from "../../data/products.js";

describe('test suite: product', () => {
  let product;

  beforeEach(() => {
    product = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });

  it('has the correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(product.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
    expect(product.rating).toEqual({
      stars: 4.5,
      count: 87
    });
    expect(product.priceCents).toEqual(1090);
  });

  it('gets the stars url', () => {
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('gets the price', () => {
    expect(product.getPrice()).toEqual('$10.90');
  });

  it('Doesnot display any extra info', () => {
    expect(product.extraInfoHTML()).toEqual('');
  });
  
});

describe('test suite: clothing', () => {
  let cloth;

  beforeEach(() => {
    cloth = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });
  });

  it('has the correct properties', () => {
    expect(cloth.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
    expect(cloth.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
    expect(cloth.rating).toEqual({
      stars: 4.5,
      count: 56
    });
    expect(cloth.priceCents).toEqual(799);
  });

  it('gets the stars url', () => {
    expect(cloth.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('gets the price', () => {
    expect(cloth.getPrice()).toEqual('$7.99');
  });

  it('Display Correct extra info', () => {
    expect(cloth.extraInfoHTML().trim()).toEqual(`<a href="${cloth.sizeChartLink}" target= "_blank"  >Size Chart</a>`);
  });

});

describe('test suite: Appliances', () => {
  let kettle;
  beforeEach(() => {
    kettle = new Appliances({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliances",
      warrantyLink: "images/appliance-warranty.png",
      instructionLink: "images/appliance-instructions.png",
    });
  });
  
  it('has the correct properties', () => {
    expect(kettle.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(kettle.image).toEqual('images/products/black-2-slot-toaster.jpg');
    expect(kettle.rating).toEqual({
      stars: 5,
      count: 2197
    });
    expect(kettle.priceCents).toEqual(1899);
  });

  it('gets the stars url', () => {
    expect(kettle.getStarsUrl()).toEqual('images/ratings/rating-50.png');
  });

  it('gets the price', () => {
    expect(kettle.getPrice()).toEqual('$18.99');
  });

  it('Display Correct extra info', () => {
    expect(kettle.extraInfoHTML().trim()).toEqual(`<a href="${kettle.warrantyLink}" target= "_blank"  >Warranty</a>
    <a href="${kettle.instructionLink}" target= "_blank"  >Instructions</a>`);
  });

});

