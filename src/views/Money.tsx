import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol{
    margin: 0 -12px;
    > li{
      background: #eeeeee;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      color: #a0a0a0;
    }
  }
  > button{
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333333;
    color: #333333;
    margin-top: 8px;
  }
`;
const NotesSection = styled.section`
  padding: 0 16px;
  font-size: 14px;
  > label{
    display: flex;
    align-items: center;
    > span{
    margin-right: 16px;
    white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
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
const NumberPadSection = styled.section`
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
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请添加备注..."/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
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
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;