// stack.routes.ts
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabsRoutes } from "./tabs.routes";
import { ViewProductPage } from "@/app/viewProduct";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabsRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="viewProductPage"
        component={ViewProductPage}
        options={{ title: "Detalhes do Produto" }}
      />
    </Stack.Navigator>
  );
}
