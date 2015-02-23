import React from 'react';
import d3 from 'd3';
import Area from './Area.jsx';

export var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){DataSeries[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;DataSeries.prototype=Object.create(____SuperProtoOf____Class4);DataSeries.prototype.constructor=DataSeries;DataSeries.__superConstructor__=____Class4;
  function DataSeries() {"use strict";
    this.props = {
      title: '',
      data: [],
      interpolate: 'linear'
    };
  }

  DataSeries.prototype.render=function() {"use strict";
    let props = this.props
      , yScale = props.yScale
      , xScale = props.xScale
      , size = props.size;

    let area = d3.svg.area()
      .x(function(d)  {return xScale(d.key);})
      .y0(size.height)
      .y1(function(d)  {return yScale(d.value);});

    return (
      React.createElement(Area, {area: area(props.metrics)})
    );
  };

