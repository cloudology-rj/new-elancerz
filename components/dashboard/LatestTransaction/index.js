import { 
    Wrapper,
    Heading,
    TransactionList
} from './LatestTransactionStyles'

import TransactionItem from './Transaction';

const LatestTransaction = ({ latestTransactionLabel, latestTransactionList, isEmployeer }) => {

  return (
        <Wrapper>
            <Heading>{ latestTransactionLabel }</Heading>
            <TransactionList>
                { latestTransactionList && latestTransactionList.map((transaction, index) => <TransactionItem key={index} transaction={transaction} isEmployeer={isEmployeer} />)}
            </TransactionList>
        </Wrapper>
  )
};

export default LatestTransaction;
