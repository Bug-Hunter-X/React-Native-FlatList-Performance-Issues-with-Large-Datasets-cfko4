The solution involves using `FlatList`'s optimization properties:

```javascript
// FlatListSolution.js
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ key: i.toString(), value: `Item ${i}` }));

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.value}</Text>
  </View>
);

const OptimizedFlatList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.key}
      getItemLayout={(data, index) => ({
        length: 50,
        offset: 50 * index,
        index,
      })}
      windowSize={10} // Adjust as needed
    />
  );
};

export default OptimizedFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
  },
});
```

This uses `keyExtractor`, `getItemLayout` for fast rendering and `windowSize` to control the number of rendered items.