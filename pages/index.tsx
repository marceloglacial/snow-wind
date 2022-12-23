import { Layout } from 'components'
import Image from 'next/image'

export default function Home() {
    return (
        <Layout>
            <main className='h-screen w-screen grid place-content-center gap-8'>
                <figure className='grid place-content-center'>
                    <Image
                        src='https://res.cloudinary.com/dw2wjwhuv/image/upload/c_scale,w_128/v1671820947/snow-wind/favicon_fovbdd.png'
                        width={128}
                        height={124}
                        alt='logo'
                    />
                </figure>
                <div className='space-y-2 text-center'>
                    <h1 className='text-4xl font-bold'>
                        Snow Wind Boilterplate
                    </h1>
                    <p>A NextJS + Tailwind CSS starter pack</p>
                    <h6 className='text-sm'>
                        Created by{' '}
                        <a
                            className='text-blue-600 hover:underline'
                            href='https://github.com/marceloglacial'
                        >
                            Marcelo Glacial
                        </a>
                    </h6>
                </div>
            </main>
        </Layout>
    )
}
