import { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';


import { ButtonIcon } from '@/components/global/Button';
import { PreTitle, Bold, HeaderTwo } from '@/components/global/Text';
import { CardContainer, FlexContainer, Position, EditCardImage, TextEdit, CardImage, UploadProf } from './ProfileCardStyles';


const Star = (star) => {

  const d = 5
  const y = d - star
  const yStars = []
  const wStars = []

  for (let index = 0; index < star; index++) {
    yStars.push(index)
  }

  for (let index = 0; index < y; index++) {
    wStars.push(index)
  }

  const yRes = yStars.map((e, index) => (<div style={{ paddingRight: 8 }}><Image key={index} src="/icons/yellow-star.svg" width="42px" height="42px" /></div>))
  const wRes = wStars.map((e, index) => (<div style={{ paddingRight: 8 }}><Image key={index} src="/icons/white-star.svg" width="42px" height="42px" /></div>))

  return (<>{yRes}{wRes}</>)
}



const ProfileCard = ({ img, fullname, title, username, star, rating, joined, onClick }) => {

  const hoverEdit = (x) => {
    onClick != undefined ?
      document.getElementById('editHover').style.opacity = x
      :
      ''
  }

  var newJoined = (joined1) => {
    const splitIt = joined1.split(" ");
    return `${splitIt[1]} ${splitIt[2]} ${splitIt[3]}`
  }

  return (
    <CardContainer key={new Date()}>
      <FlexContainer>
        <CardImage
          style={{ display: 'none' }}
          id="dpIMG"
          src={img}
          width="240px"
          height="240px"
        />
        <EditCardImage
          id="dpIMG2"
          img={img}
          width="240px"
          height="240px"
        // state={onClick}
        // onMouseOver={() => hoverEdit(1)}
        // onMouseOut={() => hoverEdit(0)}
        >
          {onClick != undefined &&

            <UploadProf>
              <ButtonIcon onClick={onClick} >
                <Image src="/icons/edit-primary.svg" width="28" height="28" />
              </ButtonIcon>
            </UploadProf>

          }


          {/* <TextEdit id="editHover">
            <Image src="/icons/edit-white.svg" width="28" height="28" />
          </TextEdit> */}
        </EditCardImage>
      </FlexContainer>



      <HeaderTwo style={{
        alignContent: 'center',
        width: '352',
        lineHeight: fullname.length > 12 || 25 < fullname.length ? 1.2 : '',
        whiteSpace: 'wrap',
        overflowWrap: 'break-word',
        fontSize: fullname.length > 12 || 25 < fullname.length ? 29 : '',
        marginBottom: 12,
        marginTop: 12,
      }}>{fullname}</HeaderTwo>
      <Position style={{ marginBottom: 8 }}>{title}</Position>
      <Bold>{username}</Bold>
      <br />

      <FlexContainer>
        <div style={{ display: 'flex' }}>
          {Star(star)}
        </div>
        <PreTitle>{rating}</PreTitle>
      </FlexContainer>
      <br />
      <PreTitle>JOINED ON {newJoined(joined)}</PreTitle>
    </CardContainer >
  );

};

ProfileCard.propTypes = {};

export default ProfileCard;

