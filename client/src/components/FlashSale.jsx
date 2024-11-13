/*import React from 'react'
import '../styles/FlashSale.css';

const FlashSale = () => {
  return (
    <div className="flashSaleContainer">
        <h3>Flash sale</h3>
        <div className="flashSale-body">


            <div className="flashSaleCard">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU" alt="" />
                <div className="flashSaleCard-data">
                    <h6>Product title</h6>
                    <p>Description about product</p>
                    <h5> 30% off</h5>
                </div>
            </div>

            <div className="flashSaleCard">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU" alt="" />
                <div className="flashSaleCard-data">
                    <h6>Product title</h6>
                    <p>Description about product</p>
                    <h5> 30% off</h5>
                </div>
            </div>
            <div className="flashSaleCard">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU" alt="" />
                <div className="flashSaleCard-data">
                    <h6>Product title</h6>
                    <p>Description about product</p>
                    <h5> 30% off</h5>
                </div>
            </div>
            <div className="flashSaleCard">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU" alt="" />
                <div className="flashSaleCard-data">
                    <h6>Product title</h6>
                    <p>Description about product </p>
                    <h5> 30% off</h5>
                </div>
            </div>
            <div className="flashSaleCard">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU" alt="" />
                <div className="flashSaleCard-data">
                    <h6>Product title</h6>
                    <p>Description about product</p>
                    <h5> 30% off</h5>
                </div>
            </div>
            <div className="flashSaleCard">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU" alt="" />
                <div className="flashSaleCard-data">
                    <h6>Product title</h6>
                    <p>Description about product</p>
                    <h5> 30% off</h5>
                </div>
            </div>



        </div>
    </div>
  )
}

export default FlaskSale*/


import React from 'react';
import '../styles/FlashSale.css';

// Sample product data for flash sale items
const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description about product 1',
    discount: '30% off',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description about product 2',
    discount: '30% off',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU'
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description about product 3',
    discount: '30% off',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU'
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description about product 4',
    discount: '30% off',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU'
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description about product 5',
    discount: '30% off',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU'
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description about product 6',
    discount: '30% off',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbY9YlH663xUNGHOe0lS9n-zSwrLtiEFVw&usqp=CAU'
  }
];

const FlashSale = () => {
  return (
    <div className="flashSaleContainer">
      <h3>Flash Sale</h3>
      <div className="flashSale-body">
        {products.map(product => (
          <div key={product.id} className="flashSaleCard">
            <img src={product.imgSrc} alt={product.title} />
            <div className="flashSaleCard-data">
              <h6>{product.title}</h6>
              <p>{product.description}</p>
              <h5>{product.discount}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

