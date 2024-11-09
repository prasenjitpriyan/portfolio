import MotionDiv from './MotionDiv'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <MotionDiv
        className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      ></MotionDiv>
    </div>
  )
}

export default Spinner
