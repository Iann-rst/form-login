import { TextInput, TextInputProps } from 'react-native'

type InputTextProps = TextInputProps

export function InputText({ ...rest }: InputTextProps) {
  return (
    <TextInput
      className="flex-1 text-base text-gray-600"
      placeholderTextColor={'#9f9ba1'}
      {...rest}
    />
  )
}
