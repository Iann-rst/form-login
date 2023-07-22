import { IconProps } from 'phosphor-react-native'
import { ElementType } from 'react'

type InputPrefix = {
  icon: ElementType<IconProps>
}

export function InputPrefix({ icon: Icon }: InputPrefix) {
  return <Icon size={20} color="#5F5B62" />
}
