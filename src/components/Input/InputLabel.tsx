import { Text, TextProps } from 'react-native'

type InputLabelProps = TextProps & {
  title: string
}

export function InputLabel({ title }: InputLabelProps) {
  return <Text className="mb-1 text-xs font-bold">{title}</Text>
}
