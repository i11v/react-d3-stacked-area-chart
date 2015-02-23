import React from 'react';
import d3 from 'd3';
import Area from './Area.jsx';

export class StackedAreaChart extends React.Component {
  constuctor() {
    this.props = {
      width: 400,
      height: 400
    };
  }

  render() {
    let data = this.props.data
      , keys = this.props.keys
      , size = { width: this.props.width, height: this.props.height }
      , transform = 'rotate(90 ' + (size.width / 2) + ' ' + (size.height / 2) + ')';

    let max = d3.max(data.map(metric => {
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
      .domain(Object.keys(data[0]).filter(key => key !== 'metric'))
      .range(["#258700", "#4a9f2b", "#60ae44", "#76bf5c", "#89cd71", "#94cf7f", "#acdf9a", "#d0f7c2"]);

    let stack = d3.layout.stack()
      .values(function (d) { return d.values; });

    let campaigns = stack(color.domain().map(name => ({
      name: name,
      values: data.map(d => ({ metric: d.metric, y: d[name] }))
    })));

    let generatedDataSeries = campaigns.map(campaign => <Area data={campaign} xScale={xScale} yScale={yScale} color={color(campaign.name)} />);

    return (
      <div className='app__chart'>
        <svg width={this.props.width} height={this.props.height}>
          <g transform={transform}>
            {generatedDataSeries}
          </g>
        </svg>
      </div>
    );
  }
}
