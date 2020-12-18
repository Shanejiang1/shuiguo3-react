import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: #eeeeee;
    //color: ;
    > li{
      width: 50%;
      text-align: center;
      color: #a0a0a0;
      padding: 16px 0;
      &.selected{
      background: #3876f6;
      color: #ffffff;
      }
    }
  }
`;

export {CategorySection};