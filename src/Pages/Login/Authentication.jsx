import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Authentication = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="min-h-screen pt-20 w-full bg-neutral-200 overflow-hidden rounded-lg shadow-lg dark:bg-black"
        >


            <Link to={"/"} className="flex justify-center mx-auto">
                <img className="w-auto h-8 sm:h-10" src="https://i.ibb.co.com/CtfJQ7K/Black-Cat-Flat-Illustrative-Pets-Logo-removebg-preview.png" alt="" />
            </Link>

            <p className="mt-3  text-3xl font-bold text-center text-primary dark:text-primary">
                Pet Haven BD..!
            </p>
            <div className="flex justify-center items-center w-full">
                <div className="p-3 lg:w-[700px] mb-20 mx-auto">
                    <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                        <TabList >
                            <Tab>Sign In</Tab>
                            <Tab>Sign Up</Tab>
                        </TabList>

                        <TabPanel>
                            <SignIn switchToSignUp={() => setActiveTab(1)}></SignIn>
                        </TabPanel>
                        <TabPanel>
                            <SignUp switchToSignIn={() => setActiveTab(0)}></SignUp>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>




        </div>
    );
};

export default Authentication;