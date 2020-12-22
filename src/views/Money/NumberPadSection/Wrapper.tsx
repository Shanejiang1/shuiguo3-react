import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25), inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
  
    > button{
      font-size: 20px;
      float: left;
      width: 25%;
      height: 64px;
      border: 4px solid #f5f5f5;
      background: #ffffff;
      
      .icon{
        font-size: 32px;
        pointer-events: none;
      }
      
      &.ok{
        height: 192px;
        float: right;
        background: #3775f6;
        color: #ffffff;
      }
      &.zero{
        width: 50%;
      }
    }
  }
`;

export {Wrapper}