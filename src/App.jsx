import { useState } from 'react';
import './App.scss';
import './index.scss';

import Header from './Header';
import Information from './Information';
import JobListings from './JobListings';
import TalentExperts from './TalentExperts';
import CustomerFeedback from './CustomerFeedback';
import Guides from './Guides';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <header>
          <Header />
        </header>

        <main>
          <Information />
          <JobListings />
          <TalentExperts />
          <CustomerFeedback />
          <Guides />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
