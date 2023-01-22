import { Check } from 'phosphor-react'
import { useEffect, useState } from 'react'

interface CheckboxProps {
  id: string
  onCompleteTask: (param: string) => void
}

export const Checkbox = function ({ id, onCompleteTask }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheck = function () {
    setIsChecked((prev) => !prev)
  }

  useEffect(() => {
    onCompleteTask(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked])

  return (
    <label className="flex items-center justify-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheck}
        className="peer opacity-0 w-0 h-0"
      />
      <span className="flex items-center justify-center bg-transparent border-2 border-solid border-blue-500 rounded-full h-[18px] w-[18px] relative transition-all duration-200 peer-checked:border-none peer-checked:bg-purple-700 peer-checked:hover:bg-purple-500 peer-[:not:checked]:hover:opacity-70 hover:bg-blue-700">
        {isChecked ? (
          <Check weight="bold" className="relative m-0 z-50 text-gray-100" />
        ) : (
          ''
        )}
      </span>
    </label>
  )
}
