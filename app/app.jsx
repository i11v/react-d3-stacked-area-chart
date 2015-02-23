import React from 'react';
import CampaignAnalytics from './component/CampaignAnalytics.jsx';
import request from 'superagent';

request.get('/data').end(res => {
  window.app = React.render(
    <CampaignAnalytics data={res.text} />,
    document.body
  );
});
