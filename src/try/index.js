import { useFormProps } from '~'


const { formProps, setFormProps } = useFormProps ()


setFormProps ({ name: 'Sam' })

console.log (formProps)