import React from 'react';
import HowDoesAtomWork from '../../components/atomComponents/HowDoesAtomWork';
import WaysToUseAtom from '../../components/atomComponents/WaysToUseAtom';
import HowDoNamingContestWork from '../../components/atomComponents/HowDoNamingContestWork';

import FrequentlyAskedQuestions from '../../components/atomComponents/FrequentlyAskedQuestions';
import SearchBlock from '../../components/atomComponents/SearchBlock';
import BottomBlock from '../../components/atomComponents/BottomBlock';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HowItWorksPage = () => {
  return (
    <div>
      <Header />
      <HowDoesAtomWork />
      <WaysToUseAtom />
      <HowDoNamingContestWork />
      <FrequentlyAskedQuestions />
      <SearchBlock />
      <Footer />
      <BottomBlock />
    </div>
  );
};

export default HowItWorksPage;
