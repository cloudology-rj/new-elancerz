import styled from 'styled-components';
import { useQuery } from 'react-query';

import { useAuth } from '../../../context/AuthProvider';

import { fetchFreelancerDashboard } from '../../../api/queries';

import TopService from 'components/dashboard/TopService';
import EarningSpending from 'components/dashboard/EarningSpending';
import ServiceInquiry from 'components/dashboard/ServiceInquiry';
import AccountDetails from 'components/dashboard/AccountDetails';
import LatestTransaction from 'components/dashboard/LatestTransaction';

import useTopServiceFreelancer from 'components/dashboard/useFreelancer/useTopServiceFreelancer';
import useServiceInquiry from 'components/dashboard/useFreelancer/useServiceInquiry';
import useAcountDetails from 'components/dashboard/useFreelancer/useAcountDetails';
import useEarnings from 'components/dashboard/useFreelancer/useEarnings';
import useLatestTranstactions from 'components/dashboard/useFreelancer/useLatestTransactions';

const Freelancer = () => {
  const { token } = useAuth();

  // const { isLoading, error, data } = useQuery(
  //   'freelancerDashboard',
  //   async () => await fetchFreelancerDashboard(token)
  // );

  const { title, link, buttonText } = useTopServiceFreelancer();
  const { label, list } = useEarnings();
  const {
    inquiryTitle,
    inquiryLink,
    inquiryButtonText,
    people,
    shortText,
  } = useServiceInquiry();
  const {
    accountLabel,
    accountImageUrl,
    percent,
    acountAmount,
    isFreelancer,
  } = useAcountDetails();
  const {
    latestTransactionLabel,
    latestTransactionList,
    isEmployeer,
  } = useLatestTranstactions();

  return (
    <Boxes>
      <Box>
        <TopService title={title} link={link} buttonText={buttonText} />
        <EarningSpending label={label} list={list} />
      </Box>
      <Box>
        <ServiceInquiry
          inquiryTitle={inquiryTitle}
          inquiryLink={inquiryLink}
          inquiryButtonText={inquiryButtonText}
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
  );
};

export default Freelancer;

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Box = styled.div``;
