import { IconProps } from 'phosphor-react-native'
import { ElementType } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ActionButtonProps = TouchableOpacityProps & {
  icon: ElementType<IconProps>
}

export function ActionButton({ icon: Icon, ...rest }: ActionButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <Icon size={20} color="#5F5B62" />
    </TouchableOpacity>
  )
}
