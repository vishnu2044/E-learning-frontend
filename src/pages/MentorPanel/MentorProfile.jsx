import React from 'react'
import MentorProfileCard from '../../components/mentor/profile/MentorProfileCard'
import MentorProfileDetails from '../../components/mentor/profile/MentorProfileDetails'

const MentorProfile = () => {
  return (
    <>
      <div className='my-4 pb-8'>
        <MentorProfileCard />
        <MentorProfileDetails />

      </div>

    </>
  )
}

export default MentorProfile