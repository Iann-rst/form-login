import { Text } from 'react-native'

interface InputErrorProps {
  error: string
}

export function InputError({ error }: InputErrorProps) {
  return <Text className="text-xs text-red-600">{error}</Text>
}
