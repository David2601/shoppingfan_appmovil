import { Animated, Dimensions, Easing } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { Block } from "galio-framework";

// screens
import Elements from "../screens/Elements";
import Articulos from "../screens/Articles";
import Inicio from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import React from "react";
<<<<<<< HEAD
import Login from "../screens/Login";
import Register from "../screens/Register";
=======
import Login from "../screens/Login2";
import Register from "../screens/Register2";
import Camara from "../screens/Camera";
>>>>>>> 4ae1f05 (0.3.0 agregar sensor de huella y toma de fotos | Modificación de pantallas e rutas)
//settings
import Ajustes from "../screens/Settings";
import AboutScreen from "../screens/About";
// Notifications
import PersonalNotifications from "../screens/PersonalNotifications";
import SystemNotifications from "../screens/SystemNotifications";

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function NotificationsStack(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Personal") {
            iconName = "user";
          } else if (route.name === "System") {
            iconName = "database";
          }
          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              family="entypo"
              size={22}
              color={color}
              style={{ marginTop: 10 }}
            />
          );
        }
      })}
      tabBarOptions={{
        activeTintColor: argonTheme.COLORS.PRIMARY,
        inactiveTintColor: "gray",
        labelStyle: {
          fontFamily: "open-sans-regular"
        }
      }}
    >
      <Tab.Screen name="Personal" component={PersonalNotifications} />
      <Tab.Screen name="System" component={SystemNotifications} />
    </Tab.Navigator>
  );
}

function ElementsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Ajustes"
        component={Ajustes}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Ajustes"
              back
              scene={scene}
              navigation={navigation} 
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="About" scene={scene} navigation={navigation} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Notifications"
              scene={scene}
              navigation={navigation}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsStack}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Notifications"
              scene={scene}
              navigation={navigation}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Articulos"
        component={Articulos}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articulos" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

<<<<<<< HEAD
=======
function CameraStack(props) {
  return(
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen"
      }}
    >
    <Stack.Screen
      name="Camara"
      component={Camara}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title=""
            back
            blue
            transparent
            navigation={navigation}
            scene={scene}
          />
        ),
        headerTransparent: true,
      }}
    />
    <Stack.Screen
      name="Inicio"
      component={Inicio}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title="ShoppingFan"
            search
            options
            navigation={navigation}
            scene={scene}
          />
        ),
        cardStyle: { backgroundColor: "#F8F9FE" },
      }}
    />
    </Stack.Navigator>
  );
}

>>>>>>> 4ae1f05 (0.3.0 agregar sensor de huella y toma de fotos | Modificación de pantallas e rutas)
function RegisterStack(props) {
  return(
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen"
      }}
    >
     <Stack.Screen
      name="Register"
      component={Register}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title=""
            back
            white
            transparent
            navigation={navigation}
            scene={scene}
          />
        ),
        headerTransparent: true,
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title=""
            back
            white
            transparent
            navigation={navigation}
            scene={scene}
          />
        ),
        headerTransparent: true,
      }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title="ShoppingFan"
            search
            options
            navigation={navigation}
            scene={scene}
          />
        ),
        cardStyle: { backgroundColor: "#F8F9FE" },
      }}
    />
    </Stack.Navigator>
  );
}

function LoginStack(props) {
  return(
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen"
      }}
    >
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title=""
            back
<<<<<<< HEAD
            white
=======
            blue
>>>>>>> 4ae1f05 (0.3.0 agregar sensor de huella y toma de fotos | Modificación de pantallas e rutas)
            transparent
            navigation={navigation}
            scene={scene}
          />
        ),
        headerTransparent: true,
      }}
    />
    <Stack.Screen
      name="Inicio"
      component={Inicio}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title="ShoppingFan"
            search
            options
            navigation={navigation}
            scene={scene}
          />
        ),
        cardStyle: { backgroundColor: "#F8F9FE" },
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{
        header: ({ navigation, scene }) => (
          <Header
            title=""
            back
            white
            transparent
            navigation={navigation}
            scene={scene}
          />
        ),
        headerTransparent: true,
      }}
    />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="ShoppingFan"
              //search
              //options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Login"
    >
      <Drawer.Screen
        name="Login"
        component={LoginStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
        <Drawer.Screen
        name="Camara"
        component={CameraStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Elements"
        component={ElementsStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Articulos"
        component={ArticlesStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Ajustes"
        component={Ajustes}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
