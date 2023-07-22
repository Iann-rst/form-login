import { View } from 'react-native'

type ActionsRootProps = {
  children: React.ReactNode
}

export function ActionsRoot({ children }: ActionsRootProps) {
  return <View className="flex-row">{children}</View>
}
