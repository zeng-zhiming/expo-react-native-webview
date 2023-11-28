# expo-react-native-webview

本库是在react-native-webview库上进行扩展，为 expo 和 react native 项目提供 webview 支持用于网页加载，增加了对react-native-web的支持。

## 安装
`$ npx expo install react-native-webview`

`$ npx expo install expo-react-native-webview`

或

`$ yarn add react-native-webview`

`$ yarn add expo-react-native-webview`

或

`$ npm install react-native-webview --save`

`$ npm install expo-react-native-webview --save`

## Usage
```javascript
import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { WebView } from 'expo-react-native-webview';

class TestPage extends Component {

    // 构造函数
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }
    render() {

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <WebView style={{flex: 1}} source={{ uri: 'http://www.baidu.com' }} />
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});


export default TestPage;
```
