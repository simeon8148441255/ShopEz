/*import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <h4>@ShopEZ - One Destination for all your needs....</h4>
      <div className="footer-body">

        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>All products</li>
        </ul>

        <ul>
          <li>Cart</li>
          <li>Profile</li>
          <li>Orders</li>
        </ul>

        <ul>
          <li>Electronics</li>
          <li>Mobiles</li>
          <li>Laptops</li>
        </ul>

        <ul>
          <li>Fashion</li>
          <li>Grocery</li>
          <li>Sports</li>
        </ul>


      </div>
      <div className="footer-bottom">
        <p>@ ShopEZ.com - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer*/


import React from 'react';
import '../styles/Footer.css';

const footerLinks = [
  {
    title: 'Quick Links',
    links: ['Home', 'Categories', 'All products']
  },
  {
    title: 'Account',
    links: ['Cart', 'Profile', 'Orders']
  },
  {
    title: 'Electronics',
    links: ['Mobiles', 'Laptops', 'Cameras']
  },
  {
    title: 'Categories',
    links: ['Fashion', 'Grocery', 'Sports']
  }
];

const Footer = () => {
  return (
    <div className="Footer">
      <h4>@ShopEZ - One Destination for all your needs....</h4>
      
      <div className="footer-body">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-section">
            <h5>{section.title}</h5>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="footer-bottom">
        <p>@ ShopEZ.com - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

