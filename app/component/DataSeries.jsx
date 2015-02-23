import React from 'react';
import d3 from 'd3';
import Area from './Area.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      title: '',
      data: [],
      interpolate: 'linear'
    }
  },

  render() {
    let props = this.props
      , yScale = props.yScale
      , xScale = props.xScale
      , size = props.size;

    let area = d3.svg.area()
      .x(d => xScale(d.key))
      .y0(size.height)
      .y1(d => yScale(d.value));

    return (
      <Area area={area(props.metrics)} />
    );
  }
});
