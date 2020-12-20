import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from 'useTags';

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
      border-radius: 12px;
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
  value: string[];
  onChange: (selected: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名称');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      // 如果 tag 已经被选中，就复制所有没有被选中的 tag 作为新的 selectedTag
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={
            () => {onToggleTag(tag);}
          } className={getClass(tag)}>{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};