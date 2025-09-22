import StudentDrawer from '../components/StudentDrawer'

const AddStudentPage = () => {
  return (
    <div className="p-6">
      <StudentDrawer open={true} onClose={() => window.history.back()} /> {/* it will use to open  drawer */}
    </div>
  )
}

export default AddStudentPage
