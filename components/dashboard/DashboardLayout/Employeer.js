import styled from 'styled-components';

import TopService from 'components/dashboard/TopService';
import EarningSpending from 'components/dashboard/EarningSpending';
import ServiceInquiry from 'components/dashboard/ServiceInquiry';
import AccountDetails from 'components/dashboard/AccountDetails';
import LatestTransaction from 'components/dashboard/LatestTransaction';


import useAcountDetails from 'components/dashboard/useEmployeer/useAcountDetails';
import useLatestTranstactions from 'components/dashboard/useEmployeer/useLatestTransactions';
import useTopServiceEmployeer from 'components/dashboard/useEmployeer/useTopServiceEmployeer';
import useSpending from 'components/dashboard/useEmployeer/useSpending';
import useWorkApprovalPending from 'components/dashboard/useEmployeer/useWorkApprovalPending';


const Employeer = () => {

 console.log('EMPLOYER RUNNING');

    const { title, link, buttonText } = useTopServiceEmployeer()
    const { label, list } = useSpending()
    const { approvalTitle, approvalLink,  approvalButtonText, people, shortText } = useWorkApprovalPending()
    const { accountLabel, accountImageUrl, percent, acountAmount, isFreelancer } = useAcountDetails()
    const { latestTransactionLabel, latestTransactionList, isEmployeer } =  useLatestTranstactions()

  return <Boxes>
      <Box>
        <TopService 
            title={title} 
            link={link} 
            buttonText={buttonText}
        />
        <EarningSpending 
            label={label} 
            list={list}
        />
      </Box>
      <Box>
          <ServiceInquiry 
            inquiryTitle={approvalTitle} 
            inquiryLink={approvalLink}
            inquiryButtonText={approvalButtonText}
            people={people}
            shortText={shortText}
          />
      </Box>
      <Box>
          <AccountDetails 
            accountLabel={accountLabel}
            accountImageUrl={accountImageUrl}
            percent={percent}
            acountAmount={acountAmount}
            isFreelancer={isFreelancer}
          />
          <LatestTransaction
            latestTransactionLabel={latestTransactionLabel}
            latestTransactionList={latestTransactionList}
            isEmployeer={isEmployeer}
           />
      </Box>
  </Boxes>
};

export default Employeer;

export const Boxes = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap:16px;
    @media (max-width:991px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Box = styled.div`
    
`;

