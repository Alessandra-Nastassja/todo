import { Horse } from "@phosphor-icons/react";

import Text from './components/text'
import './App.css'

export default function App() {
  return (
    <div className='grid gap-3'>
      <div className='flex flex-col gap-2'>
        <Text variant="body-md" className='text-pink-base'>Olá mundo!</Text>
        <Text variant="body-md">Olá mundo!</Text>
        <Text className='text-green-base'>Olá mundo!</Text>
      </div>

      <div className="flex gap-1">
        <Horse weight="duotone" />
      </div>
    </div>
  )
}