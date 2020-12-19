import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};