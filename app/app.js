import React from 'react';
import request from 'superagent';
import CampaignAnalytics from './components/CampaignAnalytics.js';

request.get('/data').end(res => {
  let data = JSON.parse(res.text);

  window.app = React.render(
    <CampaignAnalytics data={ data } />,
    document.body
  );
});
