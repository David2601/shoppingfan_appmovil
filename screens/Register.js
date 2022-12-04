import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../constants/Theme';

const { width } = Dimensions.get('window');

const MARGIN_LEFT = '5%';
const SOCIAL_ICON_SIZE = theme.SIZES.BASE * 1.5;
const SOCIAL_BTN_SIZE = theme.SIZES.BASE * 3;

class Register extends React.Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSignUp = () => { this.props.navigation.navigate('Home') }

  handleSignIn = () => this.props.navigation.navigate('Login')

  render() {
    return (
      <Block safe flex style={styles.container}>
        <ScrollView style={styles.flex} keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={5}
          >
            <Header title="Crear una nueva cuenta" />
            <Block flex>
              <Text muted center size={theme.SIZES.FONT * 0.875}>
                
              </Text>
            </Block>
            <Block flex middle>
              <Form handleChange={this.handleChange} />
              <SignButtons
                handleSignIn={this.handleSignIn}
                handleSignUp={this.handleSignUp}
              />
            </Block>
          </KeyboardAvoidingView>
        </ScrollView>
      </Block>
    );
  }
}

const Header = ({ title }) => (
  <Block left style={styles.header}>
    <Text h3>{title}</Text>
  </Block>
);

const Form = ({ handleChange }) => (
  <Block style={{ marginBottom: 20 }}>
    <Input
      borderless
      placeholder="Nombre"
      style={styles.input}
      onChangeText={text => handleChange('name', text)}
    />
    <Input
      borderless
      placeholder="Apellidos"
      style={styles.input}
      onChangeText={text => handleChange('lastName', text)}
    />
    <Input
      borderless
      type="email-address"
      placeholder="Correo Electrónico"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={text => handleChange('email', text)}
    />
    <Input
      borderless
      password
      viewPass
      placeholder="Contraseña"
      style={styles.input}
      onChangeText={text => handleChange('password', text)}
    />
  </Block>
);

const SignButtons = ({ handleSignUp, handleSignIn }) => (
  <Block flex center style={{ marginBottom: 20 }}>
    <Button
      shadowless
      style={styles.button}
      round
      color="#172040"
      onPress={handleSignUp}
    >
      Sign up
    </Button>
    <Button
      round
      color="transparent"
      style={[styles.button, styles.borderColor]}
      onPress={handleSignIn}
    >
      <Text center color={theme.COLORS.BLACK}>
        Sign In
      </Text>
    </Button>
  </Block>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
    paddingTop: 15,
  },
  flex: {
    flex: 1,
  },
  input: {
    alignSelf: 'center',
    width: width * 0.89,
    borderBottomColor: theme.COLORS.BLACK,
    borderWidth: theme.SIZES.BASE * 0.04,
    borderRadius: 0,
    paddingHorizontal: 0,
  },
  button: {
    marginVertical: 10,
    width: width * 0.89,
  },
  borderColor: {
    borderColor: "#172040",
  },
  header: {
    width: '50%',
    marginLeft: MARGIN_LEFT,
  },
});

export default Register;