import * as React from "react"
import styles from './Input.module.css'
import { ErrorMessage, useField } from 'formik'
import { COLORS, Color, SIZES, Size } from "../../constants"

const mapSize = new Map()
mapSize.set(SIZES.adjustable, styles.InputAdjustableSize)
mapSize.set(SIZES.large, styles.InputLargeSize)
mapSize.set(SIZES.medium, styles.InputMediumSize)
mapSize.set(SIZES.small, styles.InputSmallSize)

const mapColor: Map<string, { input: string, label: string }> = new Map()
mapColor.set(COLORS.white, { input: styles.InputBlackColor, label: styles.InputLabelBlackColor })
mapColor.set(COLORS.blue, { input: styles.InputBlueColor, label: styles.InputLabelBlueColor })
mapColor.set(COLORS.gray, { input: styles.InputGrayColor, label: styles.InputLabelGrayColor })
mapColor.set(COLORS.white, { input: styles.InputWhiteColor, label: styles.InputLabelWhiteColor })

interface InputProps {
    color?: Color
    size?: Size
    error: boolean
    label?: string
    name: string
    placeholder?: string
    type?: 'text' | 'email' | 'password'
    // [x: string]: any
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        color = 'white',
        size = 'medium',
        error = false,
        label,
        ...props
    },
    ref
) {
    const [field] = useField(props)

    return (
        <div className={styles.InputContainer}>
            {label && <label
                className={
                    `${styles.InputLabel}
                        ${mapColor.get(color)?.label}`
                }>
                {label}
            </label>}
            <input
                ref={ref}
                className={
                    `${styles.Input} 
                        ${mapSize.get(size)}
                        ${mapColor.get(color)?.input}`
                }
                {...field}
                {...props}
            />
            {error && <ErrorMessage className={styles.InputErrorMessage} name={props.name} component="span" />}
        </div>
    )
})

export default Input