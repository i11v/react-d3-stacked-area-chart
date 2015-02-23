import React from 'react';
import CampaignAnalytics from './component/CampaignAnalytics.jsx';
import request from 'superagent';

request.get('/data').end(res => {
  let data = JSON.parse(res.text);

  window.app = React.render(
    <CampaignAnalytics data={data} />,
    document.body
  );
});
