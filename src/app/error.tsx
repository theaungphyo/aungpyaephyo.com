"use client"
const Error = ({error}:{error:Error}) => {
  return (
    <div>
      {error.message}
    </div>
  )
}

export default Error