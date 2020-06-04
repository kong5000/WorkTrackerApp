
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import TimerScreen from '../screens/TimerScreen'
import SettingsScreen from '../screens/SettingsScreen'

const AppsNavigator = createStackNavigator({
    Timer: TimerScreen,
    Settings: SettingsScreen
})

export default createAppContainer(AppsNavigator)