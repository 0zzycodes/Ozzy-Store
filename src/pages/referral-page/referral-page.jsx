import React from 'react';
import { Helmet } from 'react-helmet';
import './referral-page.scss';
const ReferralPage = () => {
  return (
    <div className="referral-page">
      <Helmet>
        <title>Referral Program | REMEDI</title>
        <meta property="og:title" content="Referral Program | REMEDI" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Cleaning When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and neat"
        />
        <meta property="og:site_name" content="REMEDI" />
        <meta property="og:url" content="https://www.remedi.store/refarral" />
      </Helmet>
      <h3>Remedi Referral Program</h3>

      <div className="block">
        <h4>What Are the Benefits Of Joining The Remedi Referral Program?</h4>
        <ul>
          <li>
            You get commission on every product your refer buy from us for 1
            week
          </li>
        </ul>
      </div>
      <div className="block">
        <h4>How Do I Become A Referral</h4>
        <h3>Coming Soon</h3>
      </div>
    </div>
  );
};

export default ReferralPage;
