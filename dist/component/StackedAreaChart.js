import React from 'react';
import d3 from 'd3';
import Area from './Area.jsx';

export var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){StackedAreaChart[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;StackedAreaChart.prototype=Object.create(____SuperProtoOf____Class5);StackedAreaChart.prototype.constructor=StackedAreaChart;StackedAreaChart.__superConstructor__=____Class5;function StackedAreaChart(){"use strict";if(____Class5!==null){____Class5.apply(this,arguments);}}
  StackedAreaChart.prototype.constuctor=function() {"use strict";
    this.props = {
      width: 400,
      height: 400
    };
  };

  StackedAreaChart.prototype.render=function() {"use strict";
    let data = this.props.data
      , keys = this.props.keys
      , size = { width: this.props.width, height: this.props.height }
      , transform = 'rotate(90 ' + (size.width / 2) + ' ' + (size.height / 2) + ')';

    let max = d3.max(data.map(function(metric)  {
      let sum = 0;

      for (let key in metric) if (metric.hasOwnProperty(key) && key !== 'metric') {
        sum += metric[key];
      }

      return sum;
    }));

    let xScale = d3.scale.ordinal()
      .domain(keys)
      .rangePoints([0, size.width]);

    let yScale = d3.scale.linear()
      .domain([0, max])
      .range([size.height, 0]);

    let color = d3.scale.ordinal()
      .domain(Object.keys(data[0]).filter(function(key)  {return key !== 'metric';}))
      .range(["#258700", "#4a9f2b", "#60ae44", "#76bf5c", "#89cd71", "#94cf7f", "#acdf9a", "#d0f7c2"]);

    let stack = d3.layout.stack()
      .values(function (d) { return d.values; });

    let campaigns = stack(color.domain().map(function(name)  {return {
      name: name,
      values: data.map(function(d)  {return { metric: d.metric, y: d[name] };})
    };}));

    let generatedDataSeries = campaigns.map(function(campaign)  {return React.createElement(Area, {data: campaign, xScale: xScale, yScale: yScale, color: color(campaign.name)});});

    return (
      React.createElement("div", {className: "app__chart"}, 
        React.createElement("svg", {width: this.props.width, height: this.props.height}, 
          React.createElement("g", {transform: transform}, 
            generatedDataSeries
          )
        )
      )
    );
  };

