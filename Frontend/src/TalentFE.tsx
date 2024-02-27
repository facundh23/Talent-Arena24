
import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/router/router'

export const TalentFE = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

