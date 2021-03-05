import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  HeaderThree,
  HeaderTwo,
  Bold,
  PreTitle,
} from '@/components/global/Text';
import {
  ButtonPrimary,
  ButtonTertiary,
  ButtonSecondary,
  ButtonIcon,
  ButtonDanger,
} from '@/components/global/Button';
import Input from '@/components/global/Input';
import TextArea from '@/components/global/TextArea';
import Dropdown from '@/components/global/Dropdown';
import Dropzone from '@/components/global/Dropzone';
import {
  GridContainer,
  FlexSpaceBetween,
  FlexCenter,
  Flex40,
  FlexColumn,
  FlexRow,
  Paragraphs,
  FlexLeft,
  FlexRight,
  FlexForm,
  FlexEnd,
  FlexYT,
  FlexTotal,
  FlexIconR,
  Flex50L,
  Flex50R,
  FlexIconOnly,
  FlexText,
} from '../serviceForm/FormServicesStyles';

import {
  SortableContainer,
  SortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const options = [
  {
    name: 'Category 1',
    id: 1,
  },
  {
    name: 'Category 2',
    id: 2,
  },
];


// const links = [
//   {
//     id: 1,
//     link: 'https://www.youtube.com/watch?v=kC-P_yW0kuE',
//   },
// ];



// const services = [
//   {
//     id: 1,
//     desc: 'Sketch and Wireframes',
//     fee: '100',
//   },
//   {
//     id: 2,
//     desc: 'Mockups and Prototypes',
//     fee: '150',
//   },
// ];



// 

import { useForm } from 'react-hook-form'
import Loader from "react-loader-spinner";
import { getCategories, createService } from "../../../api/queries";
import { useQuery } from "react-query";

const ServiceForm = ({ defaultValues, onFormSubmit, isLoading, Type, login }) => {

  // 

  const router = useRouter();

  if (router.isReady) {


    const backService = (e) => {
      e.preventDefault()
      router.back()
    }


    // const { data: options, isError, error, isLoading: gettingCateg } = useQuery(
    //   ['categories'], () => getCategories(token)
    // )

    // if (isError) {
    //   return null
    // } else {

    if (isLoading) {
      return null
    } else {


      // console.log(defaultValues)

      const { register, handleSubmit } = useForm({ defaultValues })
      const [mutating, setmutating] = useState(false)



      const submit = handleSubmit((data) => {


        let newMilestones = milestone.map(e => {
          let rObj = {}
          rObj['name'] = e.name
          rObj['price'] = e.price
          rObj['index'] = e.index
          return rObj
        })

        let dataToPass = {
          "name": data.name,
          "price": data.price,
          "desc": data.description,
          "categ": "2",
          "serviced_by": login,
          "milestones": newMilestones.length > 0 ? newMilestones : []
        }

        // console.log('dataToPass:', dataToPass)
        setmutating(true)
        onFormSubmit(dataToPass)

      })

      const [ytLinks, setYtLinks] = useState([])
      const [milestone, setMilestone] = useState([])
      const [total, setTotal] = useState(0)

      const DragHandle = sortableHandle(() => <Image src={'/icons/drag-gray.svg'} width={18} height={18} />);

      const onSortEnd = ({ oldIndex, newIndex }) => {
        let moved = arrayMove(milestone, oldIndex, newIndex)

        let newArray = moved.map((e, i) => {
          let rObj = {}
          rObj['id'] = e.id
          rObj['name'] = e.name
          rObj['price'] = e.price
          rObj['index'] = i
          return rObj
        })

        console.log('array move:', newArray)
        setMilestone(newArray);
      };

      const SortableItem = SortableElement(props => {
        const { value: item } = props;
        return (

          <FlexForm id={'milestone-' + item.id}>
            <Flex50L>
              <DragHandle />
                &emsp;
                <Input defaultValue={item.name} onChange={(e) => { setDesc(e.target.value, item.id) }} />
            </Flex50L>
            <Flex50R>
              <Image src={'/icons/dollar-gray.svg'} width={16} height={30} />
                &emsp;
                <Input id={`fee-${item.id}`} defaultValue={item.price} onChange={(e) => { countTotal(e.target.value, item.id) }} />
            </Flex50R>
            <FlexIconR>
              <ButtonIcon onClick={(e) => { delMilestone(e, item.id) }}>
                <Image src={'/icons/bin-primary.svg'} width={18} height={20} />
              </ButtonIcon>
            </FlexIconR>
          </FlexForm>
        );
      });


      const SortableList = SortableContainer(props => {
        // const { card, ...restProps } = props;
        return (
          <FlexColumn>
            {props.items.map((item, index) => (
              <SortableItem
                id={"item_" + index}
                key={`item-${index + 1}`}
                index={index}
                value={item}
              />
            ))}
          </FlexColumn>
        );
      });



      const addLink = (e) => {
        e.preventDefault()

        const yt = Object.keys(ytLinks)

        if (yt.length >= 1) {
          const last = ytLinks[yt[yt.length - 1]].id;
          const newlinks = [
            {
              link: '',
              id: last + 1,
            },
          ];
          setYtLinks([...ytLinks, ...newlinks])

        } else {
          setYtLinks([...links])

        }


      }



      // milestone

      const addMilestone = (e) => {
        e.preventDefault()

        const sr = Object.keys(milestone)
        console.log(sr);
        if (sr.length > 0) {
          const last = milestone[sr[sr.length - 1]].id;
          const lastIndex = milestone[sr[sr.length - 1]].index;
          const newServices = [
            {
              id: last + 1,
              name: '',
              price: '0',
              index: lastIndex + 1,
            },
          ];
          setMilestone([...milestone, ...newServices])
          console.log('new:', newServices)
        } else {

          const newServices = [
            {
              id: 1,
              name: '',
              price: '0',
              index: 0,

            },
          ];
          setMilestone(newServices)

          console.log('fresh:', newServices)

        }

      }


      const delMilestone = (e, id) => {
        e.preventDefault()

        const sr = Object.keys(milestone)
        if (sr.length > 1) {
          const r = milestone.filter(item => item.id !== id);
          setMilestone(r)

          const total = milestone.reduce((total, obj) => parseInt(obj.price) + parseInt(total), parseInt(0))
          const c = document.getElementById('fee-' + id).value
          const n = Math.abs(total - c)
          document.getElementById('total').innerHTML = "$ " + n

          document.getElementById('milestone-' + id).remove()
        }


      }

      const countTotal = (e, id) => {
        const r = milestone.filter(item => item.id === id);
        r[0].price = e

        const total = milestone.reduce((total, obj) => parseInt(obj.price) + parseInt(total), parseInt(0))
        document.getElementById('total').innerHTML = "$ " + total

      }

      const setDesc = (e, id) => {
        const r = milestone.filter(item => item.id === id);
        r[0].name = e
      }




      return (
        <form onSubmit={submit} >
          <GridContainer>
            {/* title and add button */}
            <FlexSpaceBetween>
              <HeaderThree>{Type} service</HeaderThree>
              <FlexIconOnly>
                <ButtonIcon onClick={e => e.preventDefault()}>
                  <Image
                    src={'/icons/bulb-primary.svg'}
                    width={18.33}
                    height={18.33}
                  />
                </ButtonIcon>
              </FlexIconOnly>
              <FlexText>
                <ButtonPrimary onClick={e => e.preventDefault()}>
                  <Image src={'/icons/bulb-white.svg'} width={18.33} height={18.33} />
                &nbsp; Quick Tips
              </ButtonPrimary>
              </FlexText>
            </FlexSpaceBetween>

            <FlexCenter>
              <Flex40>
                <FlexColumn>
                  <HeaderThree>Details</HeaderThree>
                  <br />
                  <FlexForm>
                    <FlexLeft>
                      <Paragraphs>Name of Service</Paragraphs>
                      <Input
                        reference={register}
                        id="name"
                        name="name"
                        type="text"
                        defaultValue={defaultValues?.name}
                        placeholder="Enter name of service here"
                      />
                    </FlexLeft>
                    <br></br>
                    <FlexRight>
                      <Paragraphs>Price</Paragraphs>
                      <FlexForm>
                        &emsp;
                      <FlexRow>
                          <HeaderThree>$&nbsp;</HeaderThree>
                          <Input
                            reference={register}
                            id="price"
                            name="price"
                            type="text"
                            defaultValue={defaultValues?.price}
                            placeholder="20.00" />
                        </FlexRow>
                      </FlexForm>
                    </FlexRight>
                  </FlexForm>

                  <FlexForm>
                    <FlexColumn>
                      <Paragraphs>Description</Paragraphs>
                      <TextArea
                        reference={register}
                        id="description"
                        name="description"
                        type="text"
                        defaultValue={defaultValues?.description}
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit."
                      />
                    </FlexColumn>
                  </FlexForm>

                  <FlexForm>
                    <FlexColumn>
                      <Paragraphs>Category</Paragraphs>
                      <Dropdown
                        title={'-Choose a category-'}
                        onSetOptions={() => { }}
                        onSetSelected={() => { }}
                        options={options}
                      />
                    </FlexColumn>
                  </FlexForm>


                  <FlexColumn>
                    <HeaderThree>Add images and videos</HeaderThree>
                    <br />
                    <FlexForm>
                      <div id="tester" style={{ position: 'relative', top: '2px', width: '100%' }}>
                        <Dropzone />
                      </div>
                    </FlexForm>
                    <FlexForm>
                      <FlexColumn>
                        <FlexRow>
                          <Image src={'/icons/youtube-black.svg'} width={22} height={15.46} />
                      &nbsp;
                      <Bold>YouTube URL</Bold>
                        </FlexRow>
                        <Paragraphs>Paste a link to the content you want to display on this service</Paragraphs>
                      </FlexColumn>
                    </FlexForm>


                    {ytLinks.map((data, index) => (
                      <FlexForm key={index}>
                        <FlexLeft>
                          <Input placeholder="Enter link here" />
                        </FlexLeft>
                        <FlexYT>
                          &emsp;
                    <ButtonSecondary>EMBED</ButtonSecondary>
                        </FlexYT>
                      </FlexForm>
                    ))}

                    <FlexForm >
                      <ButtonPrimary onClick={addLink}>
                        <Image src={'/icons/add-white.svg'} width={12.83} height={12.83} />
                    &nbsp;
                    MORE
                  </ButtonPrimary>
                    </FlexForm>
                  </FlexColumn>

                  <br />
                  <br />

                  <FlexColumn>
                    <HeaderThree>Milestones</HeaderThree>
                    <br />

                    <FlexRow>
                      <SortableList
                        useDragHandle
                        items={milestone}
                        onSortEnd={onSortEnd}
                        axis="y"
                        lockAxis="y"
                      />
                    </FlexRow>

                    <FlexForm>
                      <FlexRow>
                        <FlexTotal>
                          <Paragraphs>Total</Paragraphs>
                        </FlexTotal>
                        <FlexTotal>
                          <HeaderThree id="total"></HeaderThree>
                        </FlexTotal>
                      </FlexRow>
                    </FlexForm>
                    <FlexForm>
                      <ButtonPrimary onClick={addMilestone}>
                        <Image src={'/icons/add-white.svg'} width={12.83} height={12.83} />
                    &nbsp;
                    MORE
                  </ButtonPrimary>
                    </FlexForm>
                  </FlexColumn>
                </FlexColumn>
              </Flex40>
            </FlexCenter>
            <br />
            <br />


            <FlexEnd>
              <ButtonTertiary onClick={backService}>CANCEL</ButtonTertiary>
                &emsp;
                <ButtonPrimary type="submit" disabled={mutating}>
                {mutating ?
                  <div style={{ margin: -10, width: 140, display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                    <Loader type="ThreeDots" color="#fff" height={30} width={30} /*timeout={3000}*/ />
                  </div>
                  :
                  'SAVE CHANGES'
                }
              </ButtonPrimary>
            </FlexEnd>

          </GridContainer>
        </form >
      )

    }

    // }


  }


};

export default ServiceForm;

