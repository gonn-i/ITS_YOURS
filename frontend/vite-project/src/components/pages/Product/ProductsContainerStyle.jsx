import styled from 'styled-components';

const ProductsWrap = styled.section`
	/* display: flex; */
	/* max-width: 1200px; */
	width: 1330px;
	margin: 0 auto;
	/* flex-direction: column; */
	padding: 0 50px;
	@media (max-width: 1400px) {
		width: 100%;
		padding: 0 15px;
	}
`;

const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 5%;
	/* align-content: center; */
	/* gap: 50px; */
	width: 100%;
	/* justify-content: space-around; */
	justify-content: normal;
	/* margin: 60px 0 30px 0; */
	/* margin-top: 60px; */
`;

const NoProductsMessageWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	padding: 4rem 0px 8rem;
`;
const NoProductsMessage = styled.div`
	width: 500px;
	font-weight: 600;
	border-bottom: 1px solid #f7f2fa;
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	padding-bottom: 35px;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	margin-bottom: 20px;
`;

const Searchrecommendation = styled.div`
	text-align: center;
	padding-top: 40px;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 1.9;
	letter-spacing: 0.5px;
`;

export { ProductsWrap, Products, NoProductsMessageWrap, NoProductsMessage, Searchrecommendation };
