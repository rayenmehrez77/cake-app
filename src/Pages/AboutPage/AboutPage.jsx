import React from 'react'
import styled from 'styled-components'
import {TopBanner, Story} from '../../Components'

const AboutPage = () => {
    return (
        <Wrapper>
            <TopBanner>About Us</TopBanner> 
            <Story /> 
        </Wrapper>
    )
}

export default AboutPage


const Wrapper = styled.div`
    min-height: 100vh; 
`