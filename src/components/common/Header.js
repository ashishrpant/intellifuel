/**
 * Created by ash on 5/8/17.
 */

/**
 * Import lib
 */
import React from 'react';

import { Header, Title} from 'native-base';
/**
 * Create components
 */
const Headers = (props) => {


  return (
    <Header>
      <Title> { props.headerText } </Title>

    </Header>

  );
}

/**
 *Making the component available to other parts of the app
 */

export { Headers };