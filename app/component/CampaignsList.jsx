import React from 'react';
import Campaign from './Campaign.jsx';

export class CampaingsList extends React.Component {
  render() {
    let data = this.props.data;

    let generatedList = data.map(campaign => <Campaign key={campaign.id} data={campaign} />);

    return (
      <div className='app__list campaings-list'>
        {generatedList}
      </div>
    );
  }
}
