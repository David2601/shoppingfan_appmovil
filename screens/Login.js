import React from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform, Image } from 'react-native';

// galio component
import { Block, Button, Input, NavBar, Text } from 'galio-framework';
import Images from "../constants/Images";
import theme from '../constants/Theme';

const { height, width } = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
            <Text muted center size={theme.SIZES.FONT * 0.875} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
              Ingresa con los datos que ya has sido registrado con nosotros en web o en móvil
            </Text>
            <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
              <Block center>
                <Image source={Images.LogoLogin} style={styles.logo} />
              </Block>
            </Block>
          </Block>

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                color={theme.COLORS.BLUE2}
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                color={theme.COLORS.BLUE2}
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Text
                color={theme.COLORS.BLUE}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Olvidaste tu contraseña?
              </Text>
              <Block flex center>
              <Button
                round
                color="#172040"
                onPress={() => navigation.navigate('Home')}
              >
                Iniciar Sesión
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                <Text center color={theme.COLORS.BLUE} size={theme.SIZES.FONT * 0.85}>
                  {"No tiene cuenta? Registrarse"}
                </Text>
              </Button>
            </Block>
            </Block>

          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  logo: {
    width: 120,
    height: 220,
    zIndex: 2,
    position: 'relative',
    marginTop: '-30%'
  },
});

export default Login;