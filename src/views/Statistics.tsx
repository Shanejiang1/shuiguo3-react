import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';


const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #a0a0a0;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  background: #f5f5f5;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      {array.map(([date, records]) =>
        <div>
          <Header>
            {date}
          </Header>
          <div>
            {records.map(r => {
              return <Item>
                <div className="tags">
                  {r.tagIds
                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    .reduce((result, span, index, array) => result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Statistics;