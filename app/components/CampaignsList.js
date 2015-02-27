import React from 'react';
import Campaign from './Campaign.js';

export default React.createClass({
  render() {
    let data = this.props.data;

    let generatedList = data.map(campaign => <Campaign key={campaign.id} campaign={campaign} />);

    return (
      <div className='app__list campaings-list'>{ generatedList }</div>
    );
  }
})
