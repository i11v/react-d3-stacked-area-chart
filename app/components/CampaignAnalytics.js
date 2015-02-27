import React from 'react';
import CampaignsList from './CampaignsList.js';
import StackedAreaChart from './StackedAreaChart.js';
import CampaignsStore from '../stores/CampaignsStore.js';

export default React.createClass({
  getInitialState() {
    return { data: CampaignsStore.getAllCampaigns() };
  },

  componentDidMount() {
    CampaignsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    CampaignsStore.removeChangeListener(this._onChange);
  },

  render() {
    let campaignsData = this.props.data
      , data = this.state.data
      , keys = ["landings", "leads", "offers", "purchases", "shares", "friends"];

    let campaigns = keys.map(metricName => {
      let metricData = {};

      metricData['metric'] = metricName;
      Object.keys(data).forEach(key => {
        let campaign = data[key];

        metricData[campaign.title] = campaign.metrics[metricName];
      });

      return metricData;
    });

    return (
      <div className='app'>
        <CampaignsList allCampaigns={ campaignsData } selectedCampaigns={ data } />
        <StackedAreaChart data={ campaigns } keys={ keys } />
      </div>
    );
  },

  _onChange() {
    this.setState({ data: CampaignsStore.getAllCampaigns() });
  }
});
