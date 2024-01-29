import { useState } from 'react'

const initialForm = {
  name: '',
  age: '',
}

export const AgeForm = ({ warningMessage }) => {
  const [form, setForm] = useState(initialForm)
  const [success, setSubccess] = useState(false)
  const [submitDisabled, setSubmitDisabled] =
    useState(false)

  const handleFormChange = (e) => {
    const [name, value] = [e.target.name, e.target.value]

    setForm({ ...form, [name]: value })

    if (name === 'age') {
      Number(value) < 18
        ? setSubmitDisabled(true)
        : setSubmitDisabled(false)
    }
  }

  const handleSubmit = () => {
    if (submitDisabled) return

    setSubccess(true)
  }

  return (
    <div>
      <h1>Sample Form</h1>
      {!success && (
        <>
          <div>
            <input
              placeholder="Name"
              name="name"
              type="text"
              onChange={handleFormChange}
              value={form.name}
            />
            <input
              placeholder="Age"
              name="age"
              type="number"
              onChange={handleFormChange}
              value={form.age}
            />
            <button
              disabled={submitDisabled}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {submitDisabled && <p>{warningMessage}</p>}
        </>
      )}
      {success && <div>Form submitted!</div>}
    </div>
  )
}
