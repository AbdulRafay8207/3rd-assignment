import { Loader2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../app/store'
import { addNewStudent } from '../features/student/studentSlice'
import Button from './Button'
import Drawer from './Drawer'
import Input from './Input'

interface StudentDrawerProps {
  open: boolean
  onClose: () => void
}

const StudentDrawer: React.FC<StudentDrawerProps> = ({ open, onClose }) => {
  const { addLoading } = useSelector((state: RootState) => state.students)
  const dispatch = useDispatch<AppDispatch>()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.fullName.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields.')
      return
    }

    const [firstName, ...rest] = formData.fullName.trim().split(' ')
    const lastName = rest.join(' ') || ''

    dispatch(
      addNewStudent({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone || undefined,
      })
    )

    onClose()
    setFormData({ fullName: '', email: '', phone: '' })
  }

  return (
    <Drawer isOpen={open} onClose={onClose} title="Add New Student">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Phone"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={addLoading}>
            {addLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save'}
          </Button>
        </div>
      </form>
    </Drawer>
  )
}

export default StudentDrawer
