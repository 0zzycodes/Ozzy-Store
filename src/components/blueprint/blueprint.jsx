import React from 'react';

const Blueprint = () => {
  const strong = {
    fontSize: '13px',
    fontWeight: 500
  };
  return (
    <div style={{ color: '#ffffff' }}>
      <table style={{ marginTop: '100px', width: '100%', textAlign: 'center' }}>
        <tr>
          <img src="https://i.ibb.co/j4cR9mN/REMEDII-WHITE.png" alt="Logo" />
        </tr>
      </table>
      <br />
      <br />
      <table style={{ padding: '15px' }}>
        <tr>Dear Ibrahim,</tr>
        <br />
        <tr>Thank you for your purchase at Ozzy Store (Order getReference)</tr>
      </table>
      <table style={{ padding: '15px' }}>
        <tr>
          <span style={{ color: 'orange' }}>Ibrahim </span> <br />
          <br /> 226 ifedapo owode academy <br /> Ibadan, Nigeria <br /> Phone:
          09026040774
        </tr>
      </table>
      <table style={{ padding: '15px' }}>
        <tr style={{ padding: '15px' }}>
          Thank you. Your order has been received.
        </tr>
      </table>
      <table style={{ padding: '15px' }}>
        <tr>
          <td
            style={{ paddingRight: '30px', fontSize: '13px', fontWeight: 600 }}
          >
            DATE: <br /> <br /> <strong style={strong}>03/19/200</strong>
          </td>
          <td
            style={{ paddingRight: '30px', fontSize: '13px', fontWeight: 600 }}
          >
            TOTAL: <br /> <br /> <strong style={strong}>₦14340</strong>
          </td>
          <td
            style={{ paddingRight: '30px', fontSize: '13px', fontWeight: 600 }}
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
        <tr style={{ fontSize: '18px', color: 'red' }}>REMEDI CLOTHING</tr>
        <br />
        <tr>
          <td
            style={{ paddingRight: '30px', fontSize: '13px', fontWeight: 600 }}
          >
            BANK: <br /> <br />{' '}
            <strong style={strong}>Guaranty Trust Bank</strong>
          </td>
          <td
            style={{ paddingRight: '30px', fontSize: '13px', fontWeight: 600 }}
          >
            ACCOUNT NUMBER: <br /> <br />{' '}
            <strong style={strong}>12345678</strong>
          </td>
        </tr>
      </table>
      <table style={{ marginTop: '20px', textAlign: 'center' }}>
        <tr>
          <th style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}>
            Product
          </th>
          <th style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}>
            Desc
          </th>
          <th style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}>
            Qty
          </th>
          <th style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}>
            Size
          </th>
          <th style={{ padding: '15px', fontSize: '16px', fontWeight: '400' }}>
            Price
          </th>
        </tr>
        <tr>
          <td style={{ padding: '15px' }}>
            <img
              src="https://storage.googleapis.com/crwn-clothing-e7753.appspot.com/products/k53hueeg5fvth56dou8/imageUrl/img_20200112_174405.jpg"
              width="65px"
              height="73.45px"
              alt=""
            />
          </td>
          <td style={{ padding: '15px', fontSize: '12px' }}>Ship's Cannon</td>
          <td style={{ padding: '15px' }}>3</td>
          <td style={{ padding: '15px' }}>L</td>
          <td style={{ padding: '15px' }}>$100</td>
        </tr>
        <tr>
          <td style={{ padding: '15px' }} colSpan="1">
            <b>Subtotal:</b>
          </td>
          <td>$600</td>
        </tr>
      </table>
    </div>
  );
};
export default Blueprint;
