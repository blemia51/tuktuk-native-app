

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home';
import Login from '../components/Login';

const HomeStackNavigator = createStackNavigator({
  Home: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Login: {
    screen: Login,
  }
})

export default createAppContainer(HomeStackNavigator);