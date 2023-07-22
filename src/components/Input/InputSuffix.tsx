import { Feather } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'

type InputSuffixProps = {
  onTogglePasswordVisible: () => void
  onSearch: () => void
}

export function InputSuffix({
  onTogglePasswordVisible,
  onSearch,
}: InputSuffixProps) {
  return (
    <View className="flex-row">
      <TouchableOpacity className="ml-1" onPress={onTogglePasswordVisible}>
        <Feather name="eye" size={24} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onSearch}>
        <Feather name="search" size={24} />
      </TouchableOpacity>
    </View>
  )
}
