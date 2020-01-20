import React from 'react';
import { Email, renderEmail } from 'react-html-email';

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
const strong = {
  fontSize: '13px',
  fontWeight: 500
};
export const structureOrderMessage = (common, info) => {
  const {
      intro,
      name,
      address,
      city,
      country,
      phone,
      pacel,
      totalCost
    } = common,
    { thank } = info;
  const date = new Date();

  return renderEmail(
    <Email title="Your Order">
      <div style={{ padding: '15px' }}>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <tr>
            <img src="https://i.ibb.co/XZnTp2c/REMEDII.png" alt="Logo" />
          </tr>
        </table>
        <br />
        <br />
        <table style={{ padding: '0px 15px' }}>
          <tr>{intro},</tr>
        </table>
        <br />
        <table style={{ padding: '15px' }}>
          <tr>
            {thank} <br /> {info.durInfo ? info.durInfo : null}
          </tr>
        </table>
        <table style={{ padding: '15px' }}>
          <tr>
            <span style={{ color: 'orange' }}>{name} </span> <br />
            <br /> {address} <br /> {city}, {country} <br /> Phone: {phone}
          </tr>
        </table>
        {info.durInfo ? (
          <div style={{ background: '#000000', color: '#ffffff' }}>
            <table style={{ padding: '15px' }}>
              <tr style={{ padding: '15px' }}>
                Thank you. Your order has been received.
              </tr>
            </table>
            <table style={{ padding: '15px' }}>
              <tr>
                <td
                  style={{
                    paddingRight: '40px',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  DATE: <br /> <br />{' '}
                  <strong style={strong}>{date.toLocaleDateString()}</strong>
                </td>
                <td
                  style={{
                    paddingRight: '40px',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  TOTAL: <br /> <br /> <strong style={strong}>₦14340</strong>
                </td>
                <td
                  style={{
                    paddingRight: '40px',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  {' '}
                  PAYMENT METHOD: <br /> <br />{' '}
                  <strong style={strong}>Direct Transfer</strong>
                </td>
              </tr>
            </table>
            <table style={{ padding: '15px', textAlign: 'center' }}>
              <tr style={{ fontSize: '22px' }}>BANK DETAIL</tr>
            </table>
            <table style={{ padding: '15px 30px' }}>
              <tr style={{ fontSize: '18px', color: 'red' }}>
                REMEDI CLOTHING
              </tr>
              <br />
              <tr>
                <td
                  style={{
                    paddingRight: '40px',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  BANK: <br /> <br />{' '}
                  <strong style={strong}>Guaranty Trust Bank</strong>
                </td>
                <td
                  style={{
                    paddingRight: '40px',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  ACCOUNT NUMBER: <br /> <br />{' '}
                  <strong style={strong}>12345678</strong>
                </td>
              </tr>
            </table>
          </div>
        ) : null}
        <table style={{ marginTop: '30px', textAlign: 'center' }}>
          <tr style={{ padding: '15px' }}>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Product
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Desc
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Qty
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Size
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Price
            </th>
          </tr>
          {pacel.map(eachPacel => {
            const { size, name, quantity, sale, imageUrl } = eachPacel;
            return (
              <tr key={`${size}${name}`} style={{ padding: '15px' }}>
                <td style={{ padding: '15px' }}>
                  <img
                    src={imageUrl}
                    width="65px"
                    height="73.45px"
                    alt="Product"
                  />
                </td>
                <td style={{ padding: '15px', fontSize: '12px' }}>{name}</td>
                <td style={{ padding: '15px' }}>{quantity}</td>
                <td style={{ padding: '15px' }}>{size}</td>
                <td style={{ padding: '15px' }}>₦{sale}</td>
              </tr>
            );
          })}
          <tr>
            <td style={{ padding: '15px' }} colSpan="2">
              <b>Subtotal:</b>
            </td>
            <td>₦{totalCost}</td>
          </tr>
        </table>
      </div>
    </Email>
  );
};
export const structureMessage = message => {
  const {
    email,
    name,
    address,
    city,
    country,
    phone,
    pacel,
    totalCost
  } = message;
  return renderEmail(
    <Email title="Your Order">
      <div style={{ padding: '15px' }}>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <tr>
            <img src="https://i.ibb.co/XZnTp2c/REMEDII.png" alt="Logo" />
          </tr>
        </table>
        <table style={{ padding: '15px' }}>
          <tr>New order from Remedi Clothing by {name},</tr>
        </table>
        <table style={{ padding: '15px' }}>
          <tr>
            <span style={{ color: 'orange' }}>{name} </span> <br />
            <br /> {address} <br /> {city}, {country} <br /> Phone: {phone}{' '}
            <br /> Email: {email}
          </tr>
        </table>
        <table style={{ marginTop: '30px', textAlign: 'center' }}>
          <tr style={{ padding: '15px' }}>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Product
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Desc
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Qty
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Size
            </th>
            <th
              style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}
            >
              Price
            </th>
          </tr>
          {pacel.map(eachPacel => {
            const { size, name, quantity, sale, imageUrl } = eachPacel;
            return (
              <tr key={`${size}${name}`} style={{ padding: '15px' }}>
                <td style={{ padding: '15px' }}>
                  <img
                    src={imageUrl}
                    width="65px"
                    height="73.45px"
                    alt="Product"
                  />
                </td>
                <td style={{ padding: '15px', fontSize: '12px' }}>{name}</td>
                <td style={{ padding: '15px' }}>{quantity}</td>
                <td style={{ padding: '15px' }}>{size}</td>
                <td style={{ padding: '15px' }}>₦{sale}</td>
              </tr>
            );
          })}
          <tr>
            <td style={{ padding: '15px' }} colSpan="2">
              <b>Subtotal:</b>
            </td>
            <td>₦{totalCost}</td>
          </tr>
        </table>
      </div>
    </Email>
  );
};
