import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.section`
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
      border-radius: 10px;
      display: inline-block;
      padding: 10px 16px;
      font-size: 14px;
      margin: 8px 12px;
      color: #a0a0a0;
      &.selected{
        background: #3775f6;
        color: #ffffff;
      }
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

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果 tag 已经被选中，就复制所有没有被选中的 tag 作为新的 selectedTag
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => {onToggleTag(tag.id);}
          } className={getClass(tag.id)}>{tag.name}</li>)}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};