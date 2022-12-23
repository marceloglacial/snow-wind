import { PageHeader } from 'components'
import { FC, ReactNode } from 'react'
import styles from './LayoutStyles'

export interface LayoutProps
    extends React.DetailedHTMLProps<
        React.HtmlHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    children: ReactNode
}

const Layout: FC<LayoutProps> = (props): JSX.Element => {
    const { children } = props
    return (
        <div {...props} className={styles.container}>
            <PageHeader
                title={'SnowWind Boilerplate'}
                description={'A NextJS + Tailwind CSS starter pack'}
                favicon={
                    'https://res.cloudinary.com/dw2wjwhuv/image/upload/c_scale,w_128/v1671820947/snow-wind/favicon_fovbdd.png'
                }
            />
            {children}
        </div>
    )
}
export default Layout
