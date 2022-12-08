import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { Block, Checkbox, Text } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class Register extends React.Component {
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
                  <Block flex={0.2} middle style={styles.socialConnect}>
                    <Block flex={0.4} row style={{ marginBottom: 18 }}>
                    </Block>
                  </Block>
                  <Block flex={0.8} middle space="between">
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
                            <Input
                              borderless
                              placeholder="Nombre"
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="hat-3"
                                  family="ArgonExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
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
                              <Text
                                //style={{ fontFamily: "open-sans-regular" }}
                                size={12}
                                color={argonTheme.COLORS.MUTED}
                              >
                                password strength:
                              </Text>
                              <Text
                               // style={{ fontFamily: "open-sans-bold" }}
                                size={12}
                                color={argonTheme.COLORS.SUCCESS}
                              >
                                {" "}
                                strong
                              </Text>
                            </Block>
                          </Block>
                          <Block row width={width * 0.75}>
                            <Checkbox
                              checkboxStyle={{
                                borderWidth: 1
                              }}
                              color={argonTheme.COLORS.PRIMARY}
                              labelStyle={{
                                color: argonTheme.COLORS.TEXT,
                                fontSize: 12
                              }}
                              label="Estoy de acuerdo con el"
                            />
                            <Button
                              style={{ width: 130 }}
                              color="transparent"
                              textStyle={{
                                color: argonTheme.COLORS.BLUE2,
                                fontSize: 12,
                                marginRight: 5
                              }}
                            >
                              Política de privacidad
                            </Button>
                          </Block>
                        </Block>
                        <Block center>
                          <Button 
                            style={styles.createButton}
                            onPress={() => navigation.navigate('Inicio')}
                          >
                            <Text
                              //style={{ fontFamily: "open-sans-bold" }}
                              size={14}
                              color={argonTheme.COLORS.WHITE}
                            >
                              CREAR CUENTA
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
    width: width * 0.9,
    height: height < 812 ? height * 0.8 : height * 0.8,
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
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40,
    backgroundColor: "#06092F"
  },
  logo: {
    width: 120,
    height: 220,
    zIndex: 2,
    position: 'relative',
    marginTop: '-30%'
  },
});

export default Register;
