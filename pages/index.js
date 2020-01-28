import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/Nav'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ProximaRegular from '../public/fonts/Proxima-Regular.otf'

const Home = () => (
  <div>
    <Head title="Not Just a Box Events - Coming Soon" />
    <div className="hero">
      <MessengerCustomerChat
          pageId="176927569055665"
          appId="1678638095724206"
          themeColor="#ea7674"
          loggedInGreeting="Hi, I'm Debbie! Can I help you with anything?"
          loggedOutGreeting="Hi, I'm Debbie! Can I help you with anything?"
        />
      <img src="/njab_logo.svg" height="100px" width="100px"/>
      <h1 className="title">We’re adding some magic to our website!</h1>
      <p className="description">
        We’ll be back soon! In the meantime, you may talk to Debbie for your inquiries!
      </p>
    </div>
  </div>
)

export default Home
