import React from 'react';
import CampaignList from './CampaignsList.jsx';
import StackedAreaChart from './StackedAreaChart.jsx';

export var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){CampaignAnalytics[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;CampaignAnalytics.prototype=Object.create(____SuperProtoOf____Class1);CampaignAnalytics.prototype.constructor=CampaignAnalytics;CampaignAnalytics.__superConstructor__=____Class1;function CampaignAnalytics(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
  CampaignAnalytics.prototype.render=function() {"use strict";
    let campaingsData = this.props.data;

    let chartData = [campaingsData[0], campaingsData[1], campaingsData[2], campaingsData[3], campaingsData[4], campaingsData[5], campaingsData[6], campaingsData[7]];

    let keys = ["landings", "leads", "offers", "purchases", "shares", "friends"];

    let campaings = keys.map(function(metricName)  {
      let metricData = {};

      metricData['metric'] = metricName;
      chartData.forEach(function(campaign)  { metricData[campaign.title] = campaign.metrics[metricName]; });

      return metricData;
    });

    return (
      React.createElement("div", {className: "app"}, 
        React.createElement(CampaingsList, {data: campaingsData}), 
        React.createElement(StackedAreaChart, {data: campaings, keys: keys})
      )
    );
  };

