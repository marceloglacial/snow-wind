import Head from 'next/head'
import { FC } from 'react'

export interface PageHeaderProps {
    title: string
    description?: string
    favicon: string
}

const PageHeader: FC<PageHeaderProps> = ({
    title,
    description,
    favicon,
}): JSX.Element => {
    return (
        <Head>
            <title>
                {title} {description && `- ${description}`}
            </title>
            <meta name={title} content={description} />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href={favicon} />
        </Head>
    )
}
export default PageHeader
