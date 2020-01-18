import React from 'react';
import { Email, Item, renderEmail } from 'react-html-email';

export const PostFetch = (url, message) => {
  fetch(url, {
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
const makePay = {
    background: 'black',
    padding: '20px',
    bottom: 0,
    color: 'white',
    textAlign: 'left',
    height: '300px'
  },
  ul = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alingItems: 'flex-start'
  },
  li = {
    listStyle: 'none',
    fontSize: '15px',
    padding: '5px'
  },
  strong = {
    fontSize: '13px',
    fontWeight: 600
  },
  ourBankDetail = {
    padding: '30px 0px'
  },
  h2 = {
    marginBottom: '20px'
  },
  h3 = {
    fontWeight: 500,
    color: 'red'
  },
  flex = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alingItems: 'center'
  };
export const structureOrderMessage = (common, info) => {
  const { intro, name, address, city, country, phone, pacel, total } = common,
    { thank } = info;
  const date = new Date();

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
        {info.durInfo ? (
          <div style={makePay}>
            <h6>Thank you. Your order has been received.</h6>
            <br />
            <ul style={ul}>
              <li style={li}>
                <h6>
                  DATE:{' '}
                  <strong style={strong}>{date.toLocaleDateString()}</strong>
                </h6>
              </li>
              <li style={li}>
                <h6>
                  TOTAL: <strong style={strong}>₦{total}</strong>
                </h6>
              </li>
              <li style={li}>
                <h6>
                  PAYMENT METHOD:{' '}
                  <strong style={strong}>Direct Transfer</strong>
                </h6>
              </li>
            </ul>
            <div style={ourBankDetail}>
              <h2 style={h2}>BANK DETAIL</h2>
              <h3 style={h3}>REMEDI CLOTHING</h3>
              <ul>
                <li style={li}>
                  <h6>
                    BANK: <strong style={strong}>Guaranty Trust Bank</strong>
                  </h6>
                </li>
                <li style={li}>
                  <h6>
                    ACCOUNT NUMBER: <strong style={strong}>1620207873</strong>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        <h3>Package(s)</h3>
        {pacel.map(eachPacel => {
          const { size, name, quantity, price, imageUrl } = eachPacel;
          return (
            <div key={`${size}${name}`}>
              <div style={flex}>
                <img
                  src={imageUrl}
                  width="65px"
                  height="73.45px"
                  alt="product"
                />
                <span style={{ marginLeft: '20px', paddingBottom: '30px' }}>
                  <span>Name: {name}</span>
                </span>
              </div>
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
export const structureMessage = message => {
  const { email, name, address, city, country, phone, pacel, total } = message;
  return renderEmail(
    <Email title="Your Order">
      <div style={{ padding: '15px' }}>
        <Item align="left">
          <p fontSize={12}>New order from Remedi Clothing by {name},</p>
        </Item>
        <h4 style={{ fontSize: '16px' }}>
          <span style={{ color: 'orange' }}>{name} </span> <br />
          <br /> {address} <br /> {city}, {country} <br /> Phone: {phone} <br />{' '}
          Email: {email}
        </h4>

        <h3>Package(s)</h3>
        {pacel.map(eachPacel => {
          const { size, name, quantity, price, imageUrl } = eachPacel;
          return (
            <div key={`${size}${name}`}>
              <div style={flex}>
                <img
                  src={imageUrl}
                  width="65px"
                  height="73.45px"
                  alt="product"
                />
                <span style={{ marginLeft: '20px', paddingBottom: '30px' }}>
                  <span>{name}</span>
                </span>
              </div>
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
