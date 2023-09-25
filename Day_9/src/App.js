import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import HomePage from "./pages/HomePage";
import ProductDetail from "./components/productDetail/ProductDetail";
import ApparelPage from "./pages/Apparel";
import ToysPage from "./pages/Toys";
import FountainsPage from "./pages/Fountains";
import CatTreesPage from "./pages/CatTrees";
import SearchPage from "./pages/Search";
import ErrorPage from "./components/UI/Error";
import OderConfirm from "./components/UI/OrderConfirm";
import SimpleInput from "./components/menuNavBar/header/Account";
import Account from "./components/menuNavBar/header/Account";
import AccountPage from "./pages/Account";
import AboutPage from "./pages/AboutPage";
import Faq from "./pages/Faq";
import ContactPage from "./pages/ContactPage";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [ 

        { path: "/", element: <LoginPage/> },
        { path: "/signup", element: <SignUp/> },
        { path: "/home", element: <HomePage /> },
        { path: "/about", element: <AboutPage/> },
        { path: "/contact", element: <ContactPage/> },
        { path: "/faq", element: <Faq/> },
        { path: "/terms", element: <Terms/> },
        { path: "/policy", element: <Policy/> },
        { path: "product/:productId", element: <ProductDetail /> },
        {
          path: "apparel",
          element: <ApparelPage />,
          children: [{ path: ":productId", element: <ProductDetail /> }],
        },
        { path: "fountains", element: <FountainsPage /> },
        { path: "toys", element: <ToysPage /> },
        { path: "catTrees", element: <CatTreesPage /> },
        { path: "search", element: <SearchPage /> },
        { path: "confirmation", element: <OderConfirm /> },
        { path: "account", element: <AccountPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;















// import './App.css';
// import { BrowserRouter,Routes, Route, Navigate, useLocation } from "react-router-dom";

// import LoginPage from './pages/LoginPage';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';


// function App() {
  
//   return (
//     <div className="App">
//     <BrowserRouter>
//     <Routes>
//     <Route path='/' element={<LoginPage/>}/>
//     <Route path='/home' element={<Home/>}/>
//     <Route path='/signup' element={<SignUp/>}/>
//     </Routes>
//     </BrowserRouter>
//   </div>
//   );
// }

// export default App;

