import React from 'react';
import d3 from 'd3';

export class Area extends React.Component {
  constructor() {
    this.props = {
      area: '',
      style: 'green'
    }
  }

  render() {
    let data = this.props.data
      , style = { fill: this.props.color }
      , xScale = this.props.xScale
      , yScale = this.props.yScale;

    let area = d3.svg.area()
      .x(d => xScale(d.metric))
      .y0(d => yScale(d.y0))
      .y1(d => yScale(d.y0 + d.y));

    return (
      <g className='campaign'>
        <path className='area' d={area(data.values)} style={style}></path>
      </g>
    );
  }
}
