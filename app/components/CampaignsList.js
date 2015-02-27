import React from 'react';
import Campaign from './Campaign.js';
import CampaignsStore from '../stores/CampaignsStore.js';

export default React.createClass({
  getInitialState() {
    return CampaignsStore.getAllCampaigns();
  },

  render() {
    let data = this.props.data;

    let generatedList = data.map(campaign => <Campaign isChecked={ !!this.state[campaign.id] } key={campaign.id} campaign={campaign} />);

    return (
      <div className='app__list campaings-list'>{ generatedList }</div>
    );
  }
})
