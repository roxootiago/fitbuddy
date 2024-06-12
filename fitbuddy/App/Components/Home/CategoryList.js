import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'

export default function CategoryList({setSelectedCategory}) {
  const categoryList = [
    {
      id: 1,
      name: "Resistencia",
      value: "gas_station",
      icon: {
        uri: "https://img.icons8.com/?size=100&id=BoxCBhx8WzP7&format=png&color=000000",
      },
    },
    {
      id: 2,
      name: "Cardio",
      value: "restaurant",
      icon: {
        uri: "https://img.icons8.com/?size=100&id=jyJGpNFcJ-4R&format=png&color=000000",
      },
    },
    {
      id: 3,
      name: "Musculação",
      value: "musculação",
      icon: {
        uri: "https://img.icons8.com/?size=100&id=122692&format=png&color=000000",
      },
    },
  ];
  return (
    <View style={{marginTop:15}}>
      <Text style={{
        fontSize:20,
        fontFamily:'raleway-bold',
        color: 'white'
        
      }} >Treinos</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5}}
        renderItem={({item})=>(
          <TouchableOpacity 
          onPress={()=>setSelectedCategory(item.value)} >
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
      
    </View>
  )
}