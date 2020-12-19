import styled from 'styled-components';
import React, {useState} from 'react';

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

const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }

        break;
      case '删除':
        console.log('删除');
        break;
      case '完成':
        console.log('完成');
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="ok">完成</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};