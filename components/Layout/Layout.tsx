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
                favicon={'/favicon.png'}
            />
            {children}
        </div>
    )
}
export default Layout
