import React from 'react'
import styled from 'styled-components'
import { TopBanner } from '../../Components'

const LoginPage = () => {
    return (
        <Wrapper>
            <TopBanner>Sign In / Sign Up</TopBanner>
        </Wrapper>
    )
}

export default LoginPage


const Wrapper = styled.div`
    min-height: 100vh; 
`