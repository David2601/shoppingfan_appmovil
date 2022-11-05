import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen1() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient 
        style={styles.container}
        colors={['#018ABE', '#018ABE', '#000000']}
        start={{ x: 6, y: -6}}
        end={{ x: 2, y: 2 }}
      >
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#24648C'
                name='user-circle-o'
                type='font-awesome'
                size={100}
              />
            </View>
            <Text style={styles.loginTitleText}>Iniciar Sesión</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                placeholder={'Correo Electrónico'}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Contraseña</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                secureTextEntry={true}
                textContentType='password'
              />
            </View>
            <TouchableOpacity>
              <LinearGradient
                colors={['#24648C', '#172040']}
                style={styles.gradientButton}
              >
                <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>¿Has olvidado tu contraseña?</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}>
              ¿No tienes una cuenta?
            </Text>
            <TouchableOpacity
              style={styles.registerButton}
            >
              <Text style={{
                fontSize: 20,
                fontWeight: '500',
                textAlign: 'center'
              }}>
                Crear Cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#fff',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.45,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#fff',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.3,
    right: Dimensions.get('window').width * -0.4,
  },
  centerizedView: {
    width: '100%',
    top: '15%',
    paddingTop: 35
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#24648C',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 30,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradientButton: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    paddingBottom: 10
  },
  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#24648C'
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});