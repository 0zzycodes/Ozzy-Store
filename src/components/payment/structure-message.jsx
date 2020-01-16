import React from 'react';
import { Email, Item, renderEmail } from 'react-html-email';

export const PostFetch = message => {
  fetch('https://ozzystore-backend.herokuapp.com/order', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });
};

export const structureMessage = (common, info) => {
  const { intro, name, address, city, country, phone, pacel, total } = common,
    { thank } = info;

  return renderEmail(
    <Email title="Your Order">
      <div style={{ padding: '15px' }}>
        <Item align="left">
          <p fontSize={12}>{intro},</p>
          <p fontSize={11}>
            {thank} <br /> {info.durInfo ? info.durInfo : null}
          </p>
        </Item>
        <h4 style={{ fontSize: '16px' }}>
          <span style={{ color: 'orange' }}>{name} </span> <br />
          <br /> {address} <br /> {city}, {country} <br /> Phone: {phone}
        </h4>
        <h3>Package(s)</h3>
        {pacel.map(eachPacel => {
          const { size, name, quantity, price, imageUrl } = eachPacel;
          return (
            <div key={`${size}${name}`}>
              <Item>
                <img
                  src={imageUrl}
                  width="65px"
                  height="73.45px"
                  alt="product"
                />
                <span style={{ marginLeft: '20px', paddingBottom: '30px' }}>
                  <span>Name: {name}</span>
                </span>
              </Item>
              <p style={{ marginRight: '5px' }}>
                Size: {size} <br /> Qty: {quantity} <br /> Price: ₦{price}
              </p>
            </div>
          );
        })}
        <br />
        <h2>Total: ₦{total}</h2>
      </div>
    </Email>
  );
};
