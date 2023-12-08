import { COLORS, Color, SIZES, Size } from '../../constants'
import styles from './Button.module.css'

const mapSize = new Map()
mapSize.set(SIZES.adjustable, styles.ButtonAdjustableSize)
mapSize.set(SIZES.large, styles.ButtonLargeSize)
mapSize.set(SIZES.medium, styles.ButtonMediumSize)
mapSize.set(SIZES.small, styles.ButtonSmallSize)

const mapColor: Map<Color, { textColor: string, backgroundColor: string, borderColor: string }> = new Map()
mapColor.set(COLORS.black, {
    textColor: styles.ButtonBlackTextColor,
    backgroundColor: styles.ButtonBlackBackgroundColor,
    borderColor: styles.ButtonBlackBorderColor
})
mapColor.set(COLORS.blue, {
    textColor: styles.ButtonBlueTextColor,
    backgroundColor: styles.ButtonBlueBackgroundColor,
    borderColor: styles.ButtonBlueBorderColor
})
mapColor.set(COLORS.gray, {
    textColor: styles.ButtonGrayTextColor,
    backgroundColor: styles.ButtonGrayBackgroundColor,
    borderColor: styles.ButtonGrayBorderColor
})
mapColor.set(COLORS.white, {
    textColor: styles.ButtonWhiteTextColor,
    backgroundColor: styles.ButtonWhiteBackgroundColor,
    borderColor: styles.ButtonWhiteBorderColor
})

type Display = 'row' | 'rowReverse' | 'column' | 'columnReverse'
const mapDisplay: Map<Display, string> = new Map()
mapDisplay.set('row', styles.ButtonRowDisplay)
mapDisplay.set('rowReverse', styles.ButtonRowReverseDisplay)
mapDisplay.set('column', styles.ButtonColumnDisplay)
mapDisplay.set('columnReverse', styles.ButtonColumnReverseDisplay)

interface ButtonProps {
    children: JSX.Element | React.ReactNode
    display?: Display
    textColor?: Color
    backgroundColor?: Color
    borderColor?: Color
    icon?: JSX.Element
    iconFirst?: boolean
    type?: 'button' | 'reset' | 'submit'
    size?: Size
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
    children,
    icon,
    size = 'adjustable',
    display = 'row',
    textColor = 'black',
    backgroundColor = 'white',
    borderColor = 'white',
    ...props
}: ButtonProps) => (
    <button
        className={`
                ${styles.Button}
                ${mapSize.get(size)}
                ${mapColor.get(textColor)?.textColor}
                ${mapColor.get(backgroundColor)?.backgroundColor}
                ${mapColor.get(borderColor)?.borderColor}
                ${mapDisplay.get(display)}`
        }
        {...props}
    >
        {icon && <>{icon}</>}
        {children}
    </button>
)

export default Button