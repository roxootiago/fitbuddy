import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function CategoryItem({category}) {


  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        margin: 5,
        width: 95,
        height: 95,
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#FF6826",
      }}
    >
      <Image source={category.icon} style={{ width: 60, height: 60 }} />
      <Text style={{ fontSize: 11, fontFamily: "raleway", color: "white" }}>
        {category.name}
      </Text>
    </View>
  );
}