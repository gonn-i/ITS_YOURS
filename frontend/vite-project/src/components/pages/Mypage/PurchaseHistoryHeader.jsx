import styled from 'styled-components';

const PurchaseHistoryHeader = () => {
	return (
		<InPurchaseHistoryHeader>
			<PurchaseHistoryTitle>나의 구매내역</PurchaseHistoryTitle>
		</InPurchaseHistoryHeader>
	);
};

const InPurchaseHistoryHeader = styled.section`
	display: flex;
	flex-direction: column;
	gap: 30px;
	max-width: 100%;
	align-items: center;
`;

const PurchaseHistoryTitle = styled.h1`
	font-family: SUIT;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export default PurchaseHistoryHeader;