import Image from 'next/image'
import { add } from '@foundation/sample-lib'

export default function Home() {
  console.log('add', add(1, 2))
  return <main>Hello Worldß</main>
}
