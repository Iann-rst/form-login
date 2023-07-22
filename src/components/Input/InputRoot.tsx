import React from 'react'
import { View } from 'react-native'

interface InputRootProps {
  children: React.ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return <View className="w-full">{children}</View>
}
