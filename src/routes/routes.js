import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home/home";
import Perfil from "../pages/Perfil/perfil";
import Categoria from "../pages/Categoria/categoria";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 55,
                    backgroundColor: '#1D1C1C',
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: '#ef4418',
                tabBarInactiveTintColor: '#EBE7E7',
            }}
        >
            <Tab.Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="home"
                            size={25}
                            color={focused ? '#ef4418' : '#EBE7E7'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Categorias"
                component={Categoria}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="chef-hat"
                            size={25}
                            color={focused ? '#ef4418' : '#EBE7E7'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome6
                            name="user-large"
                            size={22}
                            color={focused ? '#ef4418' : '#EBE7E7'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}