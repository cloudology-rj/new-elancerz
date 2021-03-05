import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderThree, Bold, PreTitle } from '@/components/global/Text';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import ProfileServicesCard from '../Cards/ProfileServicesCard/ProfileServicesCard';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
  ButtonIcon
} from '@/components/global/Button';
import {
  FlexLine,
  ProfileContainer,
  BodyContainer,
  Paragraphs,
  ProfileServices,
  FlexBetween,
  FlexCenter,
  ProfileBannerButtons,
  ExitPublicView,
  FlexNav,
  FlexBaseline,
  FlexBaselineMobile,
  HeroImage
} from './ProfileStyles';
import Modal from '@/components/global/Modal';
import ReviewCard from '../Cards/ReviewCard/ReviewCard';


const Profile = ({ ...props }) => {

  console.log(props);

  // route
  const router = useRouter();
  // publicview
  const [isPublic, setIsPublic] = useState(false);
  const toggle = () => setIsPublic(!isPublic);

  // Modal

  const [modalActive, setModalActive] = useState(false)

  const [selectedService, setSelectedService] = useState(0)

  const toggleModal = (id) => {
    setSelectedService(id)
    setModalActive(!modalActive)
  }

  // console.log(props?.username)

  const joinedDate = new Date(props?.created_at)


  const ModalContent = () => {


    const service = props?.services?.find(x => x.id === selectedService);
    // const service = services.find(x => x.id === selectedService);
    try {


      return (
        <>
          <HeaderThree className="card-header">{service.name}</HeaderThree>
          <br />
          <FlexLine />
          <br />
          <img
            src={'https://via.placeholder.com/1000x800.png?text=Service+Image'}
            width="100%"
            height="300px"
          />
          <br />
          <Paragraphs>{service.description}</Paragraphs>
          <br />
          <FlexBetween>
            <PreTitle>0 Services Completed</PreTitle>
            <HeaderThree>{service.rate}</HeaderThree>
          </FlexBetween>
        </>
      );


    } catch (error) {

      return <></>
    }

  };

  const bg = localStorage.getItem('el-bg');
  const [_bgimg, set_bgimg] = useState(bg == undefined || bg == null || bg == "" || bg == "null" ? '/images/banner.png' : bg)



  const editClick = (e) => {
    router.push('/profile/edit/');
  };

  const getaQuote = () => {
    router.push('/messages/1')
  }

  const prev = () => {
    const DivServ = document.getElementById('servicesScroll')

    DivServ.scrollBy({
      top: 0,
      left: -((DivServ.offsetWidth / 3) + (DivServ.offsetWidth / 3)),
      behavior: "smooth"
    })
  }

  const next = () => {
    const DivServ = document.getElementById('servicesScroll')

    DivServ.scrollBy({
      top: 0,
      left: ((DivServ.offsetWidth / 3) + (DivServ.offsetWidth / 3)),
      behavior: "smooth"
    })
  }

  const scroll = () => {
    const slider = document.getElementById('servicesScroll')
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.6; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;

    });
  }



  return (
    <ProfileContainer>
      <HeroImage bg={_bgimg}>
        {isPublic ? (
          <ExitPublicView>
            <ButtonSecondary onClick={toggle}>
              <FlexBetween>
                <Image src="/icons/view-primary.svg" width={20} height={20} />
                &nbsp;&nbsp;EXIT PUBLIC VIEW
              </FlexBetween>
            </ButtonSecondary>
          </ExitPublicView>
        ) : (
          <ProfileBannerButtons>
            <ButtonPrimary onClick={toggle}>
              <FlexBetween>
                <Image src="/icons/view.svg" width={20} height={20} />
                &nbsp;&nbsp;PUBLIC VIEW
              </FlexBetween>
            </ButtonPrimary>
            <ButtonSecondary onClick={editClick}>EDIT PROFILE</ButtonSecondary>
          </ProfileBannerButtons>
        )}

        <FlexCenter >
          <ProfileCard
            img={props?.avatar == null || props?.avatar == "" ? 'https://via.placeholder.com/500x500.png?text=Profile+Image' : props?.avatar}
            fullname={props?.first_name == null || props?.last_name == null || props?.first_name == "" || props?.last_name == "" ? 'First & Last Name' : props?.first_name + ' ' + props?.last_name}
            title={props?.title}
            username={props?.username}
            star={0}
            rating={0}
            // joined={joinedDate.toDateString()}
            joined={joinedDate.toString()}
          />
        </FlexCenter>
      </HeroImage>

      <BodyContainer>

        <div style={{ paddingTop: 32 }}>
          <HeaderThree style={{ paddingBottom: 8 }}>About</HeaderThree>
          <Paragraphs>{props?.about}</Paragraphs>
        </div>

        <FlexBetween>
          <HeaderThree>Services ({props?.services?.length})</HeaderThree>
          {/* <HeaderThree>Services ({services.length})</HeaderThree> */}
          <FlexNav>
            {props?.services?.length > 4 ?
              <ButtonIcon onClick={prev} >
                <Image src={'/icons/prev-primary.svg'} width={12} height={14} />
              </ButtonIcon>
              :
              <ButtonIcon style={{ cursor: 'not-allowed' }}>
                <Image src={'/icons/prev-gray.svg'} width={12} height={14} />
              </ButtonIcon>
            }
        &emsp;

            {props?.services?.length > 4 ?
              <ButtonIcon onClick={next} >
                <Image src={'/icons/next-primary.svg'} width={12} height={14} />
              </ButtonIcon>
              :
              <ButtonIcon style={{ cursor: 'not-allowed' }}>
                <Image src={'/icons/next-gray.svg'} width={12} height={14} />
              </ButtonIcon>
            }
          </FlexNav>
        </FlexBetween>


      </BodyContainer>



      <ProfileServices id="servicesScroll" onMouseEnter={scroll}>
        {/* {services.map((data, index) => ( */}
        {props?.services?.map((data, index) => (
          <ProfileServicesCard
            key={data.name + '_' + index}
            // serviceImage={data.img}
            serviceImage={'https://via.placeholder.com/500x500.png?text=Service+Image'}
            serviceName={data.name}
            serviceCategory={'Category Name'}
            serviceFee={'$' + data.price}
            // serviceCompleted={data.num}
            serviceCompleted={0}
            toggle={() => toggleModal(data.id)}
          //             toggle={() => { }}
          />
        ))}
      </ProfileServices>



      <br />

      <BodyContainer>

        {isPublic ? (
          <ButtonPrimary>
            <FlexBaseline>
              <Image src="/icons/send-white.svg" width={20} height={20} />
              &nbsp;&nbsp;SEND A MESSAGE
          </FlexBaseline>
          </ButtonPrimary>
        ) : (
          <ButtonTransparent>
            <FlexBaseline>
              <Image src="/icons/send.svg" width={20} height={20} />
                &nbsp;&nbsp;SEND A MESSAGE
          </FlexBaseline>
          </ButtonTransparent>
        )}



        <HeaderThree>Reviews (7)</HeaderThree>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

        <FlexBaseline>
          <FlexBaselineMobile>MORE</FlexBaselineMobile>
        </FlexBaseline>

      </BodyContainer>


      <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />} />

    </ProfileContainer>
  );
};

export default Profile;

