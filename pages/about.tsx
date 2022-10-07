import Link from 'next/link'

import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'


export default function AboutPage() {
  return (
    <>

      <h1>About Page</h1>

        <h1 className='title'>
          {/* Ir a <a href="contact">Contact</a>= */}
          Ir a <Link href="/contact">Contact</Link>
       </h1>

        <p className='description'>
          Editado{' '}
          <code className='code'>pages/about.js</code>
        </p>
    </>

  )
}

AboutPage.getLayout = function getLayout ( page: JSX.Element ) {
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}