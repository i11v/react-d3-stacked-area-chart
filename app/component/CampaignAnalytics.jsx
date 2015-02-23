import React from 'react';
import CampaignList from './CampaignsList.jsx';
import StackedAreaChart from './StackedAreaChart.jsx';

export class CampaignAnalytics extends React.Component {
  render() {
    let campaingsData = this.props.data;

    let chartData = [campaingsData[0], campaingsData[1], campaingsData[2], campaingsData[3], campaingsData[4], campaingsData[5], campaingsData[6], campaingsData[7]];

    let keys = ["landings", "leads", "offers", "purchases", "shares", "friends"];

    let campaings = keys.map(metricName => {
      let metricData = {};

      metricData['metric'] = metricName;
      chartData.forEach(campaign => { metricData[campaign.title] = campaign.metrics[metricName]; });

      return metricData;
    });

    return (
      <div className='app'>
        <CampaingsList data={campaingsData} />
        <StackedAreaChart data={campaings} keys={keys} />
      </div>
    );
  }
}
