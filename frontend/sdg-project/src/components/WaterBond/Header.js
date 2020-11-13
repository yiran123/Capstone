import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


const HeaderWrapper = styled.div`
padding: 53px 140px 20px;
backgroud: #fff;
box-shadow: 0px 4px 8px #A4B4C1;
`

const HeaderTopWrapper = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
color: #51687B;
margin-bottom: 23px;
`

const HeaderBottomWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const TextWrapper = styled.div`

`

const Title = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 32px;
color: #000000;
margin-bottom: 23px;
`

const Desc = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #51687B;
margin: 10px 0;
`

const PictureWrapper = styled.div`

`

const PicTitle = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
color: #0F1F19;
width: 119px;
height: 28px;
letterSpacing: 0.04em;
`

const PicWrapper = styled.div``

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
}
  render() {
    var project = this.props.project;
        var sdgList   = [];
        if(this.props.project.sdgs != undefined) {
          sdgList = project.sdgs;
        }

    
    return (
      <HeaderWrapper>
    
    <HeaderBottomWrapper>
      <TextWrapper>
        <Title>{project.name}</Title>
        <Desc>
          
          <p class="description">{project.description}</p>
        </Desc>
      </TextWrapper>
      <PictureWrapper>
        <PicTitle>Aligned SDGs</PicTitle>
        <PicWrapper>
          {sdgList.map((sdg) =>{
            if(sdg <= 9) {
                sdg = "0"+sdg
            }
            return <img width="52" height="52" className="tabDescImg" src={require(`../../static/icons/sdgs/E-WEB-Goal-${sdg}.png`)} alt='sdg8' />

            })
          }
        </PicWrapper>
      </PictureWrapper>
    </HeaderBottomWrapper>
  </HeaderWrapper>

    )
  }
}

export default Header;