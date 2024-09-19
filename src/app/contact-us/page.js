import ContactDetailsArea from '@/components/Contact/ContactDetailsArea'
import InnerHeader from '@/components/General/InnerHeader'
import React from 'react'

const Index = () => {
  return (
    <div className='contentPage'>
        <InnerHeader pageTitle="Contact Us" />
        <div className=''>
          <ContactDetailsArea/>
        </div>
    </div>
  )
}

export default Index
