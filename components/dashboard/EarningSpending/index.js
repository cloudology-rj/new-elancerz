import { 
    Wrapper,
    Heading,
    ServiceList
} from './EarningSpendingStyles'

import ServiceItem from './Service';

const EarningSpending = ({ label, list }) => {

  return (
        <Wrapper>
            <Heading>{ label }</Heading>
            <ServiceList>
                { list && list.map((service, index) => <ServiceItem key={index}  service={service}/>) }
            </ServiceList>
        </Wrapper>
  )
};

export default EarningSpending;
