import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => (
  <div>
    <Head title="Not Just a Box Events - Coming Soon" />
    <Nav />

    <div className="hero">
      <MessengerCustomerChat
          pageId="176927569055665"
          appId="1678638095724206"
          themeColor="#ea7674"
          loggedInGreeting="Hi, I'm Debbie! Can I help you with anything?"
          loggedOutGreeting="Hi, I'm Debbie! Can I help you with anything?"
        />
      <img src="/logonjabpink-notext.png" height="50px" width="50px"/>
      <h1 className="title">We’re adding some magic to our website!</h1>
      <p className="description">
        We’ll be back soon! In the meantime, you may talk to Debbie for your inquiries!
      </p>
    </div>

    <style jsx>{`
      .hero {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        background-color: #e1b2a6;
      }
      .title {
        margin: 0;
        width: 100%;
        margin-top: 15px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
