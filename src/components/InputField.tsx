import * as React from 'react'
import TextField, { Input } from '@material/react-text-field'

interface Props {
  label: React.ReactNode
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
}

const InputField: React.FunctionComponent<Props> = ({
  value,
  onChange,
  ...props
}) => (
  <TextField {...props}>
    <Input value={value} onChange={onChange} />
  </TextField>
)

export default React.memo(InputField)
