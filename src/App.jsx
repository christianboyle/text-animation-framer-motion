import AnimatedTextCharacter from './components/AnimatedTextCharacter.jsx'
import AnimatedTextWord from './components/AnimatedTextWord.jsx'

export default function Home() {
  return (
    <div>
      <AnimatedTextWord text='animated text (by word) with framer-motion' />
      <AnimatedTextCharacter text='animated text (by character) with framer-motion' />
    </div>
  )
}
