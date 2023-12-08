export type Color = 'black' | 'blue' | 'gray' | 'white'
export const COLORS: Record<Color, Color> = {
    black: 'black',
    blue: 'blue',
    gray: 'gray',
    white: 'white'
}

export type FontWeight = 'black' | 'bold' | 'light' | 'medium' | 'regular'
export const FONTS: Record<FontWeight, FontWeight> = {
    black: 'black',
    bold: 'bold',
    light: 'light',
    medium: 'medium',
    regular: 'regular'
}

export type Size = 'adjustable' | 'large' | 'medium' | 'small'
export const SIZES: Record<Size, Size> = {
    adjustable: 'adjustable',
    large: 'large',
    medium: 'medium',
    small: 'small'
}