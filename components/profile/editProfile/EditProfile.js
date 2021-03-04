import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { HeaderThree, SmallText, PreTitle } from '@/components/global/Text';
import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import Input from '@/components/global/Input';
import TextArea from '@/components/global/TextArea';
import ProfileCard from '../../Cards/ProfileCard/ProfileCard';
import ProfileServicesCard from '../../Cards/ProfileServicesCard/ProfileServicesCard';
import {
  ProfileContainer,
  ProfileBanner,
  FormContainer,
  // HeroImage,
  FlexBetween,
  FlexCenter,
  ProfileServices,
  ProfileServicesItem,
  ProfileServicesContainer,
  FlexName,
  FlexHalf,
  DraggingArea,
  HeroImage,
  Change
} from './EditProfileStyles';
import eFetch from '../../../helpers/fetch';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import Loader from "react-loader-spinner";
import { useQueryClient } from "react-query";


// static serviecs
const services = [
  {
    img: 'http://placekitten.com/500/500',
    type: 'Service static 1',
    rate: '$50',
    item: 'qwe',
    num: '12'
  }
]


const EditProfile = ({ user, token, isLoading }) => {

  if (isLoading) {
    return (
      <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loader type="ThreeDots" color="#4CD7D0" height={50} width={50} /*timeout={3000}*/ />
      </div>
    )
  } else {

    const queryClient = useQueryClient()
    const router = useRouter();
    const [fullName, setfullName] = useState(user?.first_name + ' ' + user?.last_name)
    const [firstName, setfirstName] = useState(user?.first_name)
    const [lastName, setlastName] = useState(user?.last_name)
    const [userName, setuserName] = useState(user?.username)
    const [userTitle, setuserTitle] = useState(user?.title)
    const [userAbout, setuserAbout] = useState(user?.about)
    const [joinedDate, setjoinedDate] = useState(new Date(user?.created_at))
    const [card, setCard] = useState(user?.services);
    const [isRouting, setisRouting] = useState(false);


    const gotoServices = () => {
      router.push('/services/new')
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
      setCard(arrayMove(card, oldIndex, newIndex));
    };

    const SortableItem = SortableElement(user => {
      const { value: item } = user;
      return (
        <ProfileServicesItem>
          <ProfileServicesCard
            // serviceImage={item.img}
            serviceImage={'https://via.placeholder.com/500x500.png?text=Service+Image'}
            serviceName={item.name}
            serviceFee={'$' + item.price}
            serviceCategory={'Category Name'}
            // serviceCompleted={item.num} 
            serviceCompleted={0}
          />
        </ProfileServicesItem>
      );
    });

    const SortableList = SortableContainer(user => {
      return (
        <ProfileServices>
          {user.items.map((item, index) => (
            <SortableItem
              id={"item_" + index}
              key={`item - ${index + 1} `}
              index={index}
              value={item}
            />
          ))}
        </ProfileServices>
      );
    });

    // change bg local storage
    const bg = localStorage.getItem('el-bg');
    const [_bgimg, set_bgimg] = useState(bg == undefined || bg == null || bg == "" || bg == "null" ? '/images/banner.png' : bg)
    const [_Oldbgimg, set_Oldbgimg] = useState(bg)



    const changeBG = async (data) => {

      let mybg = await data.target.files[0]
      if (mybg) {
        const bgreader = new FileReader()
        // const img = document.getElementById("bgIMG");
        // const img2 = document.getElementById("dpIMG2");

        bgreader.onload = e => {
          localStorage.setItem('el-bg', e.target.result)
          set_bgimg(e.target.result)
        }
        bgreader.readAsDataURL(mybg);
      }

    }

    // change dp
    const [_img, set_img] = useState(user?.avatar)

    const changeMyDP = (data) => {

      let dp = data.target.files[0]


      if (dp) {
        const reader = new FileReader()
        const img = document.getElementById("dpIMG");
        const img2 = document.getElementById("dpIMG2");

        reader.onload = e => {
          img.src = e.target.result;
          set_img(e.target.result)
        }
        reader.readAsDataURL(dp);
      }

    }




    // saveeeeeeee
    const saveChanges = async () => {

      firstName == null || firstName == '' ? null : firstName
      lastName == null || lastName == '' ? null : lastName
      _img == null || _img == 'https://via.placeholder.com/500x500.png?text=Profile+Image' ? null : _img

      const data = {
        "first_name": firstName,
        "last_name": lastName,
        "username": userName,
        "title": userTitle,
        "about": userAbout,
        "avatar": _img
        // "avatar": new Blob([inputUploadDP.value], { type: 'image/jpeg' })
      }

      // console.info(data)
      setisRouting(true)
      await eFetch(`/profile/${user?.id}`, 'PUT', token, data)
      await queryClient.invalidateQueries('EditprofileData')
      router.replace('/profile')

    }



    const cancelClick = async (e) => {
      if (_Oldbgimg != null || _Oldbgimg != undefined || _Oldbgimg != "" || _Oldbgimg != "null") {
        await localStorage.setItem('el-bg', _Oldbgimg)
        router.push('/profile')
      } else {
        router.push('/profile')
      }
    }




    return (
      <ProfileContainer>
        <HeroImage bg={_bgimg}>
          <ProfileBanner>
            <ButtonPrimary onClick={saveChanges} disabled={isRouting}>
              {isRouting ?
                <div style={{ width: 150 }}>
                  <Loader style={{ margin: - 5 }} type="ThreeDots" color="#fff" height={30} width={30} /*timeout={3000}*/ />
                </div>
                :
                <FlexBetween>
                  <Image src='/icons/check-white.svg' width={20} height={20} />
                  &nbsp;&nbsp;SAVE CHANGES
              </FlexBetween>
              }
            </ButtonPrimary>
            <ButtonSecondary onClick={cancelClick}>CANCEL</ButtonSecondary>
          </ProfileBanner>

          <FlexCenter>
            <ProfileCard
              img={user?.avatar == null || user?.avatar == "" ? 'https://via.placeholder.com/500x500.png?text=Profile+Image' : _img}
              fullname={user?.first_name == null || user?.last_name == null ? 'First & Last Name' : firstName + ' ' + lastName}
              title={userTitle}
              username={userName}
              star={0}
              rating={0}
              joined={joinedDate.toDateString()}
              onClick={() => document.getElementById("dpInput").click()}
            />
          </FlexCenter>
          <Change>
            <ButtonPrimary onClick={() => document.getElementById("bgInput").click()}>
              <FlexBetween>
                <Image src='/icons/edit-white.svg' width={20} height={20} />
              &nbsp;&nbsp;CHANGE COVER IMAGE
            </FlexBetween>
            </ButtonPrimary>
          </Change>


        </HeroImage>


        <div if="formBG" style={{ display: 'none' }}>
          <input onClick={e => (e.target.value = null)} onChange={e => changeMyDP(e)} id="dpInput" name="dpInput" type="file" accept=".jpeg, .png, .jpg" />
          <input onClick={e => (e.target.value = null)} onChange={e => changeBG(e)} id="bgInput" name="bgInput" type="file" accept=".jpeg, .png, .jpg" />
        </div>



        <FormContainer>
          <FlexName>
            <FlexHalf>
              <SmallText style={{ paddingBottom: 8 }}>First Name</SmallText>
              <Input onChange={e => setfirstName(e.target.value)} defaultValue={user?.first_name} />
            </FlexHalf>
            <FlexHalf>
              <SmallText style={{ paddingBottom: 8 }}>Last Name</SmallText>
              <Input onChange={e => setlastName(e.target.value)} defaultValue={user?.last_name} />
            </FlexHalf>
          </FlexName>

          <SmallText>Title</SmallText>
          <Input onChange={e => setuserTitle(e.target.value)} defaultValue={user?.title} />

          <br />
          <SmallText>Username</SmallText>
          <Input onChange={e => setuserName(e.target.value)} defaultValue={user?.username} />

          <br />
          <SmallText>About</SmallText>
          <TextArea rows="10" cols="33" onChange={e => setuserAbout(e.target.value)} defaultValue={user?.about} />
          <br />

          {/* <HeaderThree>Services ({user.services.length})</HeaderThree> */}

          <FlexBetween style={{ alignItems: 'center' }}>
            <HeaderThree>Services ({services.length})</HeaderThree>
            <ButtonPrimary onClick={gotoServices}>ADD NEW SERVICES</ButtonPrimary>
          </FlexBetween>
          <DraggingArea>
            <Image src='/icons/info-gray.svg' width={20} height={20} />
          &nbsp;&nbsp;
          <PreTitle> DRAG CARDS TO CHANGE ORDER</PreTitle>
          </DraggingArea>

        </FormContainer>


        <ProfileServicesContainer>
          <ProfileServices>
            <SortableList
              items={card}
              onSortEnd={onSortEnd}
              axis="xy"
            />
          </ProfileServices>
        </ProfileServicesContainer>
      </ProfileContainer >
    );
  }
};

export default EditProfile;
