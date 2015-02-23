import React from 'react';
import d3 from 'd3';

export var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Area[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Area.prototype=Object.create(____SuperProtoOf____Class2);Area.prototype.constructor=Area;Area.__superConstructor__=____Class2;
  function Area() {"use strict";
    this.props = {
      area: '',
      style: 'green'
    }
  }

  Area.prototype.render=function() {"use strict";
    let data = this.props.data
      , style = { fill: this.props.color }
      , xScale = this.props.xScale
      , yScale = this.props.yScale;

    let area = d3.svg.area()
      .x(function(d)  {return xScale(d.metric);})
      .y0(function(d)  {return yScale(d.y0);})
      .y1(function(d)  {return yScale(d.y0 + d.y);});

    return (
      React.createElement("g", {className: "campaign"}, 
        React.createElement("path", {className: "area", d: area(data.values), style: style})
      )
    );
  };

