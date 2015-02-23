import React from 'react';

export default React.createClass({
  render() {
    let data = this.props.data;

    return (
      <label className='campaign'>
        <input type='checkbox' className='campaign__input' />
        <span className='campaign__text'>{data.title}</span>
      </label>
    );
  }
});
