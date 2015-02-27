import React from 'react';
import CampaignActions from '../actions/CampaignAction.js';

export default React.createClass({
  getInitialState() {
    return {
      isChecked: this.props.isChecked
    }
  },

  _checkCampaign() {
    this.setState({ isChecked: !this.state.isChecked });
    CampaignActions.toggleCheck(this.props.campaign)
  },

  render() {
    let campaign = this.props.campaign;

    return (
      <label className='campaign'>
        <input
          type='checkbox'
          value={ campaign.id }
          className='campaign__input'
          checked={ this.state.isChecked }
          onChange={ this._checkCampaign } />
        <span className='campaign__text'>{ campaign.title }</span>
      </label>
    );
  }
});
