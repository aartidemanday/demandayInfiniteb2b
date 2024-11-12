import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import GetStartedPage from './components/GetStartedPage';
import LearnMorePage from './components/LearnMorePage';
import SolutionSet from './views/apps/solutionSets';
import CountryDetails from './views/apps/solutionSets/CountryDetails_old';


import Login from './pages/Login';
import Category from './views/apps/whitepapers/Category';
import Whitepapers from './views/apps/whitepapers';


const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/Home" element={<HomePage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/whitepapers" element={<Whitepapers />} />
                        <Route path="/whitepaper" element={<SolutionSet />} />
                       
                        <Route path="/get-started" element={<GetStartedPage />} />
                        <Route path="/learn-more" element={<LearnMorePage />} />
                        <Route path="/country/:countryName" element={<CountryDetails />} />
                        
                        {/* Add route for dynamic category */}
                        <Route path="/category/:category" element={<Category />} />  {/* This is the new category route */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import LoginPage from './components/LoginPage';
// import HomePage from './components/HomePage';
// import GetStartedPage from './components/GetStartedPage';
// import LearnMorePage from './components/LearnMorePage';
// import SolutionSet from './views/apps/solutionSets';
// import CountryDetails from './views/apps/solutionSets/CountryDetails';
// import Whitepapers from './components/Whitepaper';
// import Login from './pages/Login';


// const App = () => {
//     return (
//         <Router>
//             <div className="flex flex-col min-h-screen">
//                 <Header />
//                 <main className="flex-grow">
//                     <Routes>
                        
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/whitepapers" element={<Whitepapers />} />
//                         <Route path="/whitepaper" element={<SolutionSet />} />
//                         <Route path="/" element={<HomePage />} />
//                         <Route path="/get-started" element={<GetStartedPage />} />
//                         <Route path="/learn-more" element={<LearnMorePage />} />
//                         <Route path="/country/:countryName" element={<CountryDetails />} /> 
//                     </Routes>
//                 </main>
//                 <Footer />
//             </div>
//         </Router>
//     );
// };

// export default App;
