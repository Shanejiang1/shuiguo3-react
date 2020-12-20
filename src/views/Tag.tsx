import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #ffffff;
`;
const InputWrapper = styled.div`
  padding: 0 16px;
  margin-top: 8px;
  background: #ffffff;
`;
const Ol = styled.ol`
  > button{
    background: #ec6a30;
  }
`;
const All = styled.div`
  background: #f5f5f5;
`


const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Ol>
          <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
        </Ol>
      </Center>
    </div>
  );

  return (
    <All>
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>

      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>
    </All>
  );
};

export {Tag};