// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './screens/Navbar';
// import Home from './screens/Home';
// import Donate from './components/Donate';
// import DonateFood from './components/DonateFood';
// import DonateEssentials from './components/DonateEssentials';
// import Foodbank from './screens/Foodbank';
// import Ngo from './screens/Ngo';
// import Contact from './components/Contact';
// import ngoData from './Data/ngoData.json';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import { NGORegistrationForm, RegistrationForm } from './screens/NGORegistrationForm';
// import { useSpring, animated } from 'react-spring';
// import Contactus from './screens/Contactus';
// import Info from './screens/Info';
// import { FoodbanksForm } from './screens/FoodbanksForm';


// import ChatBot from 'react-simple-chatbot';
// import { Button, Dropdown } from 'semantic-ui-react';
// import React, { useEffect, useState } from "react";




// const LandingPage = () => {
//   const [showLandingPage, setShowLandingPage] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowLandingPage(false);
//     }, 3000);
    
//   }, []);

  

//   const fadeInOutAnimation = useSpring({
//     opacity: showLandingPage ? 1 : 0,
//     from: { opacity: 0 },
//     config: { duration: 2000 },
//   });

//   return (
//     <animated.div className="landing-page" style={fadeInOutAnimation}>
//       <h1 className="w-[513px] absolute text-[#2A3342] text-center mt-[18rem] ml-[35rem] font-[800] text-[110px] not-italic leading-[72px] tracking-[-2.2px] font-[Poppins] drop-shadow-lg">
//         Aahaar
//       </h1>
//       <div>
//         <animated.img
//           className="absolute w-[120px] h-[120px] ml-[35%] mt-[17%] flex-shrink-0 filter drop-shadow-lg"
//           src="logo.png"
//           alt=""
//         />
//       </div>
//     </animated.div>
//   );
// };
// const App = () => {
//   const [showLandingPage, setShowLandingPage] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowLandingPage(false);
//     }, 3000); 
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {showLandingPage ? (
//           // Show the landing page during the specified time
//           <Route path="/" element={<LandingPage />} />
//         ) : (
//           // Show the main content after the landing page duration
//           <>
//             <Route path="/" element={<Navbar />} />
//             <Route index element={<Home />} />
//             <Route path="/donate" element={<Donate />} />
//             <Route path="/foodbank" element={<Foodbank />} />
//             <Route path="/ngo" element={<Ngo data={ngoData} />} />
//             <Route path="/donatefood" element={<DonateFood />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/info" element={<Info />} />
//             <Route path="/contactus" element={<Contactus/>} />
//             <Route path="/donateessentials" element={<DonateEssentials />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/registrationform" element={<NGORegistrationForm />} />
//             <Route path="/foodbanksform" element={<FoodbanksForm />} />
//             <Route path="/footer" element={<Footer />} />
//             {/* Add other routes */}
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Navbar';
import Home from './screens/Home';
import Donate from './components/Donate';
import DonateFood from './components/DonateFood';
import DonateEssentials from './components/DonateEssentials';
import Foodbank from './screens/Foodbank';
import Ngo from './screens/Ngo';
import Contact from './components/Contact';
import ngoData from './Data/ngoData.json';
import Footer from './components/Footer';
import Login from './components/Login';
import { NGORegistrationForm, RegistrationForm } from './screens/NGORegistrationForm';
import { useSpring, animated } from 'react-spring';
import Contactus from './screens/Contactus';
import Info from './screens/Info';
import { FoodbanksForm } from './screens/FoodbanksForm';
import Map from './screens/map'
import ChatBot from 'react-simple-chatbot';
import { Button } from 'semantic-ui-react';
import Signup from './components/Signup';
import  NGODetails  from './NGODetails';

const ChatBotComponent = () => {
  const [trigger, setTrigger] = useState(null);
  const [pincode, setPincode] = useState(""); // State to store the entered PIN code
  let capturedPincode = "";
  const handlePincodeInput = (value) => {
    setPincode(value);
    setTrigger("ShowNGODetails"); // Trigger the step to display NGO details
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select one of the services",
      trigger: "services",
    },
    {
      id: "services",
      options: [
        {
          value: "Donate",
          label: "Donate",
          trigger: "Donate",
        },
        {
          value: "More information on page",
          label: "More information on page",
          trigger: "More information on page",
        },
        {
          value: "Support us",
          label: "Support us",
          trigger: "Support us",
        },
        {
          value: "Search nearby",
          label: "Search nearby",
          trigger: "Search nearby",
        },
      ],
    },
    {
      id: "Donate",
      options: [
        {
          value: "Food",
          label: "Food",
          trigger: "Food",
        },
        {
          value: "Items",
          label: "Items",
          trigger: "Items",
        },
        {
          value: "Money",
          label: "Money",
          trigger: "Money",
        },
      ],
    },
    {
      id: "Food",
      options: [
        {
          value: "Packaged food",
          label: "Packaged food",
          trigger: "Packaged food",
        },
        {
          value: "cooked food",
          label: "cooked food",
          trigger: "cooked food",
        },
      ],
    },
    {
      id: "Money",
      options: [
        {
          value: "click",
          label: "click",
          trigger: "click",
        },
      ],
    },
    {
      id: "Items",
      options: [
        {
          value: "Packaged food",
          label: "Packaged food",
          trigger: "Packaged food",
        },
        {
          value: "cooked food",
          label: "cooked food",
          trigger: "cooked food",
        },
      ],
    },
    {
      id: "Search nearby",
      options: [
        {
          value: "Foodbanks",
          label: "Foodbanks",
          trigger: "Foodbanks",
        },
        {
          value: "NGOs",
          label: "NGOs",
          trigger: "NGOs",
        },
      ],
    },
    {
      id: "Foodbanks",
      options: [
        {
          value: "By pincode",
          label: "By pincode",
          trigger: "By pincode",
        },
        {
          value: "By city name",
          label: "By city name",
          trigger: "By city name",
        },
        {
          value: "By state name",
          label: "By state name",
          trigger: "By state name",
        },
        {
          value: "By Foodbank name",
          label: "By Foodbank name",
          trigger: "By Foodbank name",
        },
      ],
    },
    {
      id: "NGOs",
      options: [
        {
          value: "By pincode",
          label: "By pincode",
          trigger: "By pincode",
        },
        {
          value: "By city name",
          label: "By city name",
          trigger: "By city name",
        },
        {
          value: "By state name",
          label: "By state name",
          trigger: "By state name",
        },
        {
          value: "By NGOs name",
          label: "By NGOs name",
          trigger: "By NGOs name",
        },
      ],
    },
    {
      id: "Packaged food",
      message: "Information about Packaged food",
      end: true,
    },
    {
      id: "cooked food",
      message: "Information about cooked food",
      end: true,
    },
    {
      id: "click",
      message: "Information about clicking",
      end: true,
    },
    {
      id: "More information on page",
      message: "For further information, feel free to ask any questions.",
      trigger: "UserQuestion",
    },
    {
      id: "UserQuestion",
      user: true,
      trigger: "what does the website do?",
    },
    {
      id: "UserQuestion",
      user: true,
      trigger: "How will it work?",
    },
    {
      id: "How will it work?",
      message: "Navigate through our website to know more.",
      trigger: "For further information, feel free to ask any questions.",
    },

    {
      id: "what does the website do?",
      message: "Our website is aimed at providing support and information about NGOs.",
      trigger: "For further information, feel free to ask any questions.",
    },

    {
      id: "For further information, feel free to ask any questions.",
      user: true,
      trigger: "How will i get the ngos list?",
    },

    {
      id: "How will i get the ngos list?",
      message: "Go to the provided url you will find it. https://youtube.com",
      end: true,
    },
     
    {
      id: "Support us",
      message: "Support us by clicking on the below link",
      end: true,
    },
    {
      id: "By pincode",
      message: "Search here",
      trigger: "waitForPINInput",
    },
    {
      id: "waitForPINInput",
      message: "Please enter the PIN code:",
      trigger: "CapturePINCodeInput",
    },
    {
      id: "CapturePINCodeInput",
      user: true,
      validator: (value) => {
        capturedPincode = Number(value); // Update the globally accessible variable
        return true; // Always return true to proceed to the next step
      },
      trigger: "ShowNGODetails", // Trigger the next step after capturing the PIN code
    },
    {
      id: "ShowNGODetails",
      component: ({ previousValue }) => {
        if (capturedPincode) {
          return <NGODetails pincode={capturedPincode} />;
        } else {
          return "No PIN code provided.";
        }
      },
      end: true,
    },
    
    {
      id: "By city name",
      message: "Search here",
      end: true,
    },
    {
      id: "By state name",
      message: "Search here",
      end: true,
    },
    {
      id: "By Foodbank name",
      message: "Search here",
      end: true,
    },
    {
      id: "By NGOs name",
      message: "Please enter the name of the NGO",
      trigger: "NGOName",
    },
    {
      id: "NGOName",
      user: true,
      end:true,
    },
  ];


  return (
    <ChatBot
      steps={steps}
      floating
      opened
      headerTitle="AI Legal Decision System"
      trigger={trigger}
      handleEnd={() => setTrigger(null)}
    />
  );
};

const LandingPage = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLandingPage(false);
    }, 3000);
  }, []);

  const fadeInOutAnimation = useSpring({
    opacity: showLandingPage ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <animated.div className="landing-page" style={fadeInOutAnimation}>
      <h1 className="w-[513px] absolute text-[#2A3342] text-center mt-[18rem] ml-[35rem] font-[800] text-[110px] not-italic leading-[72px] tracking-[-2.2px] font-[Poppins] drop-shadow-lg">
        Aahaar
      </h1>
      <div>
        <animated.img
          className="absolute w-[120px] h-[120px] ml-[35%] mt-[17%] flex-shrink-0 filter drop-shadow-lg"
          src="logo.png"
          alt=""
        />
      </div>
    </animated.div>
  );
};

const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLandingPage(false);
      setShowChatBot(true);
    }, 3000);
  }, []);

  const handleChatBotToggle = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <>
      <Router>
        <Routes>
          {showLandingPage ? (
            <Route path="/" element={<LandingPage />} />
          ) : (
            <>
              <Route path="/" element={<Navbar />} />
              <Route index element={<Home />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/foodbank" element={<Foodbank />} />
              <Route path="/ngo" element={<Ngo data={ngoData} />} />
              <Route path="/donatefood" element={<DonateFood />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/info" element={<Info />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/donateessentials" element={<DonateEssentials />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/registrationform" element={<NGORegistrationForm />} />
              <Route path="/foodbanksform" element={<FoodbanksForm />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/f" element={<DonateEssentials />} />
              <Route path="/map" element={<Map />} />
              
            </>
          )}
        </Routes>
      </Router>

      <div style={{ position: 'fixed', bottom: 20, right: 20, opacity: 150, zIndex: 100 }}>
        <Button onClick={handleChatBotToggle} primary>
          <img
            src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
            alt="ChatBot"
          />
        </Button>
        {showChatBot && <ChatBotComponent />}
      </div>
    </>
  );
};

export default App;
