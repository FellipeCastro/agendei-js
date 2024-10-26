import { AuthProvider } from "./src/contexts/auth"
import Routes from "./src/routes/routes"
import { NavigationContainer } from "@react-navigation/native"

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
