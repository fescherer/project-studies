import { Roboto } from 'next/font/google'
import { styled } from '@stitches/react'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <main className={`${roboto.className}`}>
      <Button>
        <span>Testedassd</span>
        Enviar
      </Button>
    </main>
  )
}
