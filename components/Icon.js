import React from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import argonConfig from '../assets/config/argon.json';
import galioConfig from '../assets/config/galio.json';
const ArgonExtra = require('../assets/font/argon.ttf');
<<<<<<< HEAD
const GalioExtra = require('../assets/font/galio.ttf');
=======
>>>>>>> 4ae1f05 (0.3.0 agregar sensor de huella y toma de fotos | Modificación de pantallas e rutas)
const IconArgonExtra = createIconSetFromIcoMoon( argonConfig, 'ArgonExtra');

class IconExtra extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({ ArgonExtra: ArgonExtra});
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, family, ...rest } = this.props;
    
    if (name && family && this.state.fontLoaded) {
      if (family ===  'ArgonExtra') {
        return <IconArgonExtra name={name} family={family} {...rest} />;
      }
      return <Icon name={name} family={family} {...rest} />;
    }

    return null;
  }
}

export default IconExtra;
