import AppDispatcher from '../dispatcher/AppDispatcher.js';

export default {
  toggleCheck(campaign) {
    //console.log(campaign);
    if (campaign.isChecked) {
      AppDispatcher.handleViewAction({
        type: 'CAMPAIGN_UNDO_CHECK',
        id: campaign.id
      });
    } else {
      AppDispatcher.handleViewAction({
        type: 'CAMPAIGN_CHECK',
        data: campaign
      });
    }
  }
}
