import React from 'react';
import styled from 'styled-components';
import { Category } from './Category';
import { categories } from './data';

 
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;
 
export const Categories = () => {
  return (
    <Container>
        {/* rendering the Category component for every mapped item.. */}
        {categories.map(item => <Category item={item} key={item.id} />)}
    </Container>
  )
}
