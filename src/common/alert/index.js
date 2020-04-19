import React, {Component,} from 'react';
import {Text, Wrap,} from './style';

class Alert extends Component {

  render (props) {

    return (
      <Wrap>
        <Text>
          {this.props.title}
        </Text>
      </Wrap>
    );

  }

}

export default Alert;
