import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
box-shadow: 15px 15px;
border-radius: 6px;
background: #fff;
margin-bottom: 20px;
`

const Title = styled.h1`
margin:0;
font-size: 24px;
`
const SecondaryText = styled.p`
margin:0;
color:#6b6b6b;
`
const Thumbnail = styled.div`
width:70px;
height:70px;
border-radius: 50%;
background-image: url(${(props) => props.url});
background-size: cover;
margin-right: 10px;
`

const TitleBar = styled.div`
    display: flex;
    text-align: center;
`
const CoverImage = styled.img`
    width:100%;
    border-radius: 6px 6px 0 0;
`

const Content = styled.div`
    padding:20px;
`
export const Card = ({ title, secondaryText, thumbnailUrl, coverImage, className }) => {
  return (
    <Container className={className}> {/* modifying the old card and overriding it */}
      {coverImage && <CoverImage src={coverImage} />}
      <Content>
        <TitleBar>
          {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
          <div>
            {title && <Title>{title}</Title>}
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </div>
        </TitleBar>
      </Content>
    </Container>
  )
}

