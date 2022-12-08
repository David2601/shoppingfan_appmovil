import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { 
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync 
} from 'expo-local-authentication';

import { Block, Checkbox, Text } from "galio-framework";
//import * as LocalAuthentication from 'expo-local-authentication';


import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { func } from "prop-types";

const { width, height } = Dimensions.get("screen");

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const biometricsAuth = async () => {
  const compatible = await hasHardwareAsync()
  if (!compatible) throw 'This device is not compatible for biometric authentication'
  const enrolled = await isEnrolledAsync()
  if (!enrolled) throw 'This device doesnt have biometric authentication enabled'
  const result = await authenticateAsync()
  if (!result.success) throw `${result.error} - Authentication unsuccessful`
  return 
}


class Login2 extends React.Component {
  
  
  render() {
    const { navigation } = this.props;
    
    return (
      <DismissKeyboard>
        <Block flex middle>
          <StatusBar hidden />
          <ImageBackground
            source={Images.RegisterBackground}
            style={{ width, height, zIndex: 1 }}
          >
            <Block flex middle>
              <Block style={styles.registerContainer}>
                <Block flex space="between">
                  <Block flex={0.2} middle>
                    <Block flex={0.4} row style={{ marginBottom: 18 }}>
                    </Block>
                  </Block>
                  <Block flex={0.7} middle space="between">
                    <Block flex={0.2} middle>
                        <Image source={Images.LogoLogin} style={styles.logo} />
                    </Block>
                    <Block center flex={0.9}>
                      <Block flex space="between">
                        <Block>
                          <Block
                            width={width * 0.8}
                            style={{ marginBottom: 5 }}
                          >
                          </Block>
                          <Block
                            width={width * 0.8}
                            style={{ marginBottom: 5 }}
                          >
                            <Input
                              borderless
                              placeholder="Correo Electrónico"
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="ic_mail_24px"
                                  family="ArgonExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block width={width * 0.8}>
                            <Input
                              password
                              borderless
                              viewPass
                              placeholder="Contraseña"
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="padlock-unlocked"
                                  family="ArgonExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                            <Block row style={styles.passwordCheck}>

                            </Block>
                          </Block>
                        </Block>
                        <Block middle left>
                          <Text center color={argonTheme.COLORS.BLUE} size={argonTheme.SIZES.FONT * 0.75} onPress={() => navigation.navigate('Register')}>
                                {"No tiene cuenta? Registrarse"}
                          </Text>
                        </Block>
                        <Block flex center>
                          <Button style={styles.createButton}
                            onPressIn={biometricsAuth}
                            onPressOut={() => navigation.navigate('Inicio')}

                            >
                            <Text
                              size={14}
                              color={argonTheme.COLORS.WHITE}

                            >
                              INICIAR SESIÓN
                            </Text>
                          </Button>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.88,
    height: height < 812 ? height * 0.7 : height * 0.8,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  inputIcons: {
    marginRight: 12,
    //color: "#018ABE"
    //color: "#06092F"
  },
  createButton: {
    width: width * 0.5,
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: "#06092F",
  },
  logo: {
    width: 150,
    height: 220,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
});

export default Login2;
