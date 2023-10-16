import React from 'react';
import { ActivityIndicator, StatusBar, View, Text } from 'react-native';
import reduxConfig from './src/redux/config-store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      store: reduxConfig(async () => {
        console.log('STORE is setup successfully! :::::::', this.state.store);
        this.setState({ isLoading: false })
      }),
    };
  }

  render() {
    const { isLoading, store } = this.state;
    if (isLoading) {
      return (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // flexDirection: 'row',
              backgroundColor: 'white',
              minHeight: 100,
              minWidth: 100,
              borderRadius: 8,
              padding: 16
            }}>
            <ActivityIndicator size="large" color={'red'} />
            <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 12 }}>{"Đang đồng bộ dữ liệu"}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, }}>
        <StatusBar translucent={true} barStyle={'dark-content'} />
        <Provider store={store.store}>
          <PersistGate
            // loading={<SplashScreen/>}
            persistor={store.persistor}>
            <StatusBar barStyle={'light-content'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>
                {"Món ngon hôm nay"}
              </Text>
            </View>
          </PersistGate>
        </Provider>
      </View>
    );
  }
}

export default App