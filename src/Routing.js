import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from "./Screens/Splash";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import SignInUp from "./Screens/SignInUp";
import CodeValidation from "./Screens/CodeValidation";
import Home from "./Screens/Home";
import Rider from "./Screens/Rider";
import Setting from "./Screens/Setting";
import Profile from "./Screens/Profile";
import Deals from "./Screens/Deals";
import Share from "./Screens/Share";
import DrawerView from "./Component/Drawer";

const SignInStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function OnBoardingStack() {
    return (
        <SignInStack.Navigator screenOptions={{ headerShown: false }}>
            <SignInStack.Screen name="Splash" component={Splash} />
            <SignInStack.Screen name="SignInUp" component={SignInUp} />
            <SignInStack.Screen name="Login" component={Login} />
            <SignInStack.Screen name="Register" component={Register} />
            <SignInStack.Screen name="CodeValidation" component={CodeValidation} />
            {/* <SignInStack.Screen name="MainStack" component={MainStack} /> */}
        </SignInStack.Navigator>
    )
}

function DrawerGroup() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: 302 }
            }}
            initialRouteName={"Rider"}
            drawerContent={(props) => <DrawerView {...props} />}>
            <Drawer.Screen name={"Home"} component={Home} />
            <Drawer.Screen name={"Rider"} component={Rider} />
            <SignInStack.Screen name="CodeValidation" component={CodeValidation} />
        </Drawer.Navigator>
    )

}

const Routing = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="OnBoarding" component={OnBoardingStack} />
                <RootStack.Screen name="DrawerGroup" component={DrawerGroup} />
                <RootStack.Screen name="Setting" component={Setting} />
                <RootStack.Screen name="Share" component={Share} />
                <RootStack.Screen name="Profile" component={Profile} />
                <RootStack.Screen name="Deals" component={Deals} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default Routing;