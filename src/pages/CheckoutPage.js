import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';

const CheckoutPage = () => {
  return (
    <main className="page-padding-80px">
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;
export default CheckoutPage;
