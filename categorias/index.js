// ...
import Categorias from '../screens/Categorias';

// ...

<Tab.Navigator
  // ...
>
  // ...

  <Tab.Screen
    name="Categorias"
    component={Categorias}
    options={{
      tabBarIcon: ({ color, size }) => {
        return <Feather name="layers" color={color} size={size} />;
      },
    }}
  />
</Tab.Navigator>

// ...