import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from 'react';

const Authentication = () => {
    const [activeTab, setActiveTab]=useState(0);
    return (
        <div className=" min-h-screen pt-20 bg-gray-100 overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">

            <div className="flex justify-center mx-auto">
                <img className="w-auto h-8 sm:h-10" src="https://merakiui.com/images/logo.svg" alt="" />
            </div>

            <p className="mt-3  text-3xl font-bold text-center text-sky-500 dark:text-sky-500">
                🥰Welcome back!🥰
            </p>
            <div className="flex justify-center items-center w-full">
                <div className="p-3 w-full sm:w-2/3 xl:w-1/3 mb-20 mx-auto">
                    <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                        <TabList>
                            <Tab>Sign In</Tab>
                            <Tab>Sign Up</Tab>
                        </TabList>

                        <TabPanel>
                            <SignIn switchToSignUp={()=>setActiveTab(1)}></SignIn>
                        </TabPanel>
                        <TabPanel>
                            <SignUp switchToSignIn={()=>setActiveTab(0)}></SignUp>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>




        </div>
    );
};

export default Authentication;