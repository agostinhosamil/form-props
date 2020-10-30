# Form Props

Form Props is a simple library for working with form datas inside React components having the same datas shared between them.

For using form-props, you just need {n} lines to get started and make whole you need to use form-props in you form.


## Using form Props

```javascript
import { useRef } from 'react'
import { useFormProps } from 'form-props'

const Form = () => {
	const FormRef = useRef ()
	const { setFormProps, Form } = useFormProps({ FormRef })

	Form.onSubmit = () => {
		const { name } = Form.getProps()

		alert (name)
	}

	return (
		<form method="post" action="/" ref={ FormRef }>
			<label>Name: </label><br />
			<input type="text" name="name" />

			<input type="submit" value="Save" />
		</form>
	)
}
```



## Using form Props (without "useRef")

```javascript
import { useFormProps } from 'form-props'

const Form = () => {
	const { setFormProps, Form } = useFormProps()

	Form.onSubmit = ({ props }) => {
		const { name } = Form.getProps()

		alert (name)
	}

	return (
		<Form method="post" action="/">
			<label>Name: </label><br />
			<input type="text" name="name" />

			<input type="submit" value="Save" />
		</Form>
	)
}
```
