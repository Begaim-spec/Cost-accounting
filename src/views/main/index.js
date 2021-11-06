import React from 'react';
import SignupForm from "../../components/Form";
import ShowData from "../../components/ShowData";
import Header from "../../components/Header";
import BalanceCard from "../../components/BalanceCard";
import UserModal from "../../components/Modal";


const Main = () => {
    return (
            <>
               <Header />
                <UserModal/>
                <div className='container'>
                    <h1>Ваш лист расходов</h1>
                    <BalanceCard/>
                    <SignupForm />
                    <ShowData/>
                </div>
            </>
        );
    };

export default Main;