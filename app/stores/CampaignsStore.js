import AppDispather from '../dispatcher/AppDispatcher.js';
import EventEmitter from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let _campaigns = {
  "1": {
    "id": 1,
    "title": "Little Inc",
    "metrics": {
      "offers": 665,
      "shares": 20,
      "landings": 1124,
      "leads": 1102,
      "purchases": 88,
      "friends": 74
    }
  },
  "2": {
    "id": 2,
    "title": "Marvin LLC",
    "metrics": {
      "offers": 2,
      "shares": 0,
      "landings": 2,
      "leads": 2,
      "purchases": 0,
      "friends": 0
    }
  }
};

let _loadCampaigns = (data) => {
  _campaigns[data.id] = data;
};

let CampaignsStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getCampaign(id) {
    return _campaigns[id];
  },

  getAllCampaigns() {
    return _campaigns;
  }
});

AppDispather.register(payload => {
  let action = payload.action;

  switch (action.type) {
    case 'CAMPAIGN_CHECK':
      _loadCampaigns(action.data);
      CampaignsStore.emitChange();
      break;

    default:
      // Nothing to do here
  }
});

export default CampaignsStore;
