import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Device from "../Device";

import styles from './styles';
import devices from './devices';

const DevicesList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={devices}
        renderItem={({item}) => <Device device={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default DevicesList;
