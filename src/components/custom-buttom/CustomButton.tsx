import * as Styles from './style'

export const CustomButton = ({children, startIcon, ...rest}: any) => {
  return (
    <Styles.CustomButtonContainer {...rest}>
        {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

        {children}
    </Styles.CustomButtonContainer>
  )
}
