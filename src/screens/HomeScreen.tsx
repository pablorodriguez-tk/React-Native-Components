import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animatio101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animatio102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderMenuItems = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20}}>
        <Text style={styles.title}>Menu Options</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItems(item)}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => renderListHeader()}
        ItemSeparatorComponent={() => <Text>_________</Text>}
      />
    </View>
  );
};
