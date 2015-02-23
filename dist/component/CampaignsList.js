import React from 'react';
import Campaign from './Campaign.jsx';

export var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){CampaingsList[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;CampaingsList.prototype=Object.create(____SuperProtoOf____Class3);CampaingsList.prototype.constructor=CampaingsList;CampaingsList.__superConstructor__=____Class3;function CampaingsList(){"use strict";if(____Class3!==null){____Class3.apply(this,arguments);}}
  CampaingsList.prototype.render=function() {"use strict";
    let data = this.props.data;

    let generatedList = data.map(function(campaign)  {return React.createElement(Campaign, {key: campaign.id, data: campaign});});

    return (
      React.createElement("div", {className: "app__list campaings-list"}, 
        generatedList
      )
    );
  };

