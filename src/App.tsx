import { SafeAreaView } from 'react-native';
import Navigation from './navigation/Navigation';
import { KeyboardProvider } from 'react-native-keyboard-controller';

const App = () => {
    return (
        <KeyboardProvider>
            <SafeAreaView className="flex-1 bg-black">
                <Navigation />
            </SafeAreaView>
        </KeyboardProvider>
    );
};

export default App;
