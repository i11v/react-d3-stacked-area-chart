import React from 'react';
import Campaign from './Campaign.js';

export default React.createClass({
  render() {
    let allCampaigns = this.props.allCampaigns
      , selectedCampaigns = this.props.selectedCampaigns
      , generatedList = allCampaigns.map(campaign =>
          <Campaign isChecked={ !!selectedCampaigns[campaign.id] } key={ campaign.id } campaign={ campaign } />
        );

    return (
      <div className='app__list campaings-list'>{ generatedList }</div>
    );
  }
})
