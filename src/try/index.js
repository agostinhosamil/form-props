import { useFormProps } from '~'


const { formProps, setFormProps } = useFormProps ()


setFormProps ({ name: 'Sam' })

setFormProps({ datas: { name: 'Lopes' } })

console.log (formProps)