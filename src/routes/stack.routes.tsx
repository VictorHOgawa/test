import { createStackNavigator } from "@react-navigation/stack";
import Push from "../pages/Push";

const { Navigator, Screen } = createStackNavigator();
export function StackRoutes() {
  return (
    <Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: true,
        detachPreviousScreen: false,
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              opacity: current.progress,
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
                {
                  translateX: next
                    ? next.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, -layouts.screen.width],
                      })
                    : 0,
                },
              ],
            },
          };
        },
      })}
    >
      <Screen name="Push" component={Push} />
    </Navigator>
  );
}
