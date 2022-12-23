import { Layout } from 'components'
import Image from 'next/image'

export default function Home() {
    return (
        <Layout>
            <main className='h-screen w-screen grid place-content-center gap-8'>
                <figure className='grid place-content-center'>
                    <Image
                        src='/favicon.png'
                        width={128}
                        height={128}
                        alt='logo'
                    />
                </figure>
                <div className='space-y-2 text-center'>
                    <h1 className='text-4xl font-bold'>
                        Snow Wind Boilterplate
                    </h1>
                    <p>A NextJS + Tailwind CSS starter pack</p>
                </div>
            </main>
        </Layout>
    )
}
