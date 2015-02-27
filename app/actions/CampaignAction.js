import AppDispatcher from '../dispatcher/AppDispatcher.js';

export default {
  toggleCheck(campaign) {
    AppDispatcher.handleViewAction({
      type: 'CAMPAIGN_CHECK',
      data: campaign
    });
  }
}
