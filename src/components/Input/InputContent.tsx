import React from 'react'
import { View, ViewProps } from 'react-native'

type InputContentProps = ViewProps & {
  children: React.ReactNode
}
export function InputContent({ children, ...rest }: InputContentProps) {
  return (
    <View
      className="w-full flex-row items-center rounded-md bg-white px-4 py-3 focus:border-2 focus:border-blue-300"
      {...rest}
    >
      {children}
    </View>
  )
}
