import React from 'react';

export var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Campaign[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Campaign.prototype=Object.create(____SuperProtoOf____Class0);Campaign.prototype.constructor=Campaign;Campaign.__superConstructor__=____Class0;function Campaign(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
  Campaign.prototype.render=function() {"use strict";
    let data = this.props.data;

    return (
      React.createElement("label", {className: "campaign"}, 
        React.createElement("input", {type: "checkbox", className: "campaign__input"}), 
        React.createElement("span", {className: "campaign__text"}, data.title)
      )
    );
  };

