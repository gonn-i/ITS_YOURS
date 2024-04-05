import WishHeader from '../../components/pages/MypageWish/WishHeader';
import WishContainer from '../../components/pages/MypageWish/WishContainer';
import styled from 'styled-components';

function MypageWish () {
  return (
    <ProductWrap>
      <WishHeader />
      <WishContainer />
    </ProductWrap>
  )
}

const ProductWrap = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MypageWish;