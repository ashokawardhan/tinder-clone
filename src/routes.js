import React from 'react';
import { Scene, Stack, Router, Actions, Tabs } from 'react-native-router-flux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OctionIcon from 'react-native-vector-icons/Octicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';

const styles = {
    iconStyle: {
        width: 20,
        height: 20,
        fontSize: 20,
        color: '#888'
    },
    activeIconStyle: {
        color: '#ff9393'
    }
};

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Tabs
                    key="main_nav"
                    swipeEnabled
                    showLabel={false}
                    tabBarStyle={{
                        backgroundColor: '#eee', height: 40, marginBottom: 1, marginTop: 20
                    }}
                    tabBarPosition={{ top: 0 }}
                    activeBackgroundColor="white"
                    inactiveBackgroundColor="white"
                    activeTintColor="red"
                >
                    <Stack
                        key="profileComponent"
                        title="Profile"
                        titleStyle={{ color: 'white', alignSelf: 'center' }}
                        hideNavBar
                        inactiveBackgroundColor="#FFF"
                        activeBackgroundColor="#FFF"
                        icon={({ focused }) => <FontAwesomeIcon name="user-circle" style={focused ? { ...styles.iconStyle, ...styles.activeIconStyle } : styles.iconStyle} />}
                    >
                        <Scene
                            key="profile"
                            component={() => <View><Text>Profile</Text></View>}
                        />
                    </Stack>
                    <Stack
                        key="flameComponent"
                        title="Liker"
                        titleStyle={{ color: 'white', alignSelf: 'center' }}
                        hideNavBar
                        inactiveBackgroundColor="#FFF"
                        activeBackgroundColor="#FFF"
                        icon={({ focused }) => <OctionIcon name="flame" style={focused ? { ...styles.iconStyle, ...styles.activeIconStyle } : styles.iconStyle} />}
                    >
                        <Scene
                            key="flame"
                            component={() => <View><Text>Flame</Text></View>}
                        />
                    </Stack>
                    <Stack
                        key="messagesComponent"
                        title="Messages"
                        titleStyle={{ color: 'white', alignSelf: 'center' }}
                        hideNavBar
                        inactiveBackgroundColor="#FFF"
                        activeBackgroundColor="#FFF"
                        icon={({ focused }) => <FeatherIcon name="message-circle" style={focused ? { ...styles.iconStyle, ...styles.activeIconStyle } : styles.iconStyle} />}
                    >
                        <Scene
                            key="messages"
                            component={() => <View><Text>Messages</Text></View>}
                        />
                    </Stack>
                </Tabs>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
