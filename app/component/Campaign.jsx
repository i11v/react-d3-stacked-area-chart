import React from 'react';

export class Campaign extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <label className='campaign'>
        <input type='checkbox' className='campaign__input' />
        <span className='campaign__text'>{data.title}</span>
      </label>
    );
  }
}
