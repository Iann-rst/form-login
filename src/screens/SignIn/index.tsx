import { Envelope, Eye, EyeClosed, Lock } from 'phosphor-react-native'
import { Button, Text, View } from 'react-native'
import { Actions } from '../../components/Actions'
import { Input } from '../../components/Input'
import { useFormSignIn } from './hooks'

export function SignIn() {
  const {
    control,
    errors,
    isPasswordVisible,
    Controller,
    handleFormSubmit,
    handleSubmit,
    handleTogglePassword,
  } = useFormSignIn()

  return (
    <View className="flex-1 items-center justify-center bg-gray-200 px-12">
      <Text className="mb-20 text-center text-5xl font-bold">
        Página de Login
      </Text>
      <View style={{ gap: 16 }}>
        <Text className="text-center">Acesse sua conta</Text>

        <Input.Root>
          <Input.Label title="E-mail" />
          <Input.Content
            className={`${errors.email?.message && 'border border-red-600'}`}
          >
            <Input.Prefix icon={Envelope} />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input.Text
                  className="ml-1"
                  placeholder="Digite seu e-mail"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                />
              )}
            />
          </Input.Content>
          {errors.email?.message && (
            <Input.HelperText error={errors.email.message} />
          )}
        </Input.Root>

        <Input.Root>
          <Input.Label title="Password" />
          <Input.Content
            className={`${errors.password?.message && 'border border-red-600'}`}
          >
            <Input.Prefix icon={Lock} />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input.Text
                  className="ml-1"
                  placeholder="Digite sua senha"
                  secureTextEntry={isPasswordVisible}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Actions.Root>
              <Actions.Button
                icon={isPasswordVisible ? EyeClosed : Eye}
                onPress={handleTogglePassword}
              />
            </Actions.Root>
          </Input.Content>
          {errors.password?.message && (
            <Input.HelperText error={errors.password.message} />
          )}
        </Input.Root>

        <Button title="Acessar" onPress={handleSubmit(handleFormSubmit)} />
      </View>
    </View>
  )
}
