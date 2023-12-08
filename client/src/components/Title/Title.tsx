import * as React from 'react'
import styles from './Title.module.css'
import { COLORS, Color, FONTS, FontWeight } from '../../constants'

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
const Headings: Record<HeadingElement, HeadingElement> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6'
}

interface TitleProps {
    children: React.ReactNode
    color?: Color
    element: HeadingElement
    weight?: FontWeight
}

const mapColor = new Map()
mapColor.set(COLORS.black, styles.TitleBlackColor)
mapColor.set(COLORS.blue, styles.TitleBlueColor)
mapColor.set(COLORS.gray, styles.TitleGrayColor)
mapColor.set(COLORS.white, styles.TitleWhiteColor)

const mapFont = new Map()
mapFont.set(FONTS.black, styles.TitleBlackWeight)
mapFont.set(FONTS.bold, styles.TitleBoldWeight)
mapFont.set(FONTS.light, styles.TitleLightWeight)
mapFont.set(FONTS.medium, styles.TitleMediumWeight)
mapFont.set(FONTS.regular, styles.TitleRegularWeight)

const mapHeading: Map<string, (children: React.ReactNode, className: string) => React.ReactElement> = new Map()
mapHeading.set(Headings.h1, (children, className) => <h1 className={className}>{children}</h1>)
mapHeading.set(Headings.h2, (children, className) => <h2 className={className}>{children}</h2>)
mapHeading.set(Headings.h3, (children, className) => <h3 className={className}>{children}</h3>)
mapHeading.set(Headings.h4, (children, className) => <h4 className={className}>{children}</h4>)
mapHeading.set(Headings.h5, (children, className) => <h5 className={className}>{children}</h5>)
mapHeading.set(Headings.h6, (children, className) => <h6 className={className}>{children}</h6>)

const Title = (
    {
        children,
        color = 'white',
        element,
        weight = 'medium'
    }: TitleProps) => {
    const HeadingComponent = mapHeading.get(element)
    return HeadingComponent ? HeadingComponent(
        children,
        `${styles.Title} ${mapColor.get(color)} ${mapFont.get(weight)}`
    ) : null
}

export default Title