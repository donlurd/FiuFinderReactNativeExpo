import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Camera from '@/components/Camera'


export default function camera() {
  return (
    <View>
      <Text>camera tabs</Text>
      <Camera></Camera>
    </View>
  )
}

const styles = StyleSheet.create({})