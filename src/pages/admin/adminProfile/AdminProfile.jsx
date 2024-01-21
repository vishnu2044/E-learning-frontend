import React, { useContext, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import ProfileCard from '../../../components/admin/profile/ProfileCard'
import EditProfile from '../../../components/admin/profile/EditProfile'
import ChangePassword from '../../../components/admin/profile/ChangePassword'

const AdminProfile = () => {

  let [currentComponent, setCurrentComponent] = useState('profile')

  const renderComponent = () =>{
    if (currentComponent === 'profile'){
      return <ProfileCard setCurrentComponent={setCurrentComponent} />
    }else if (currentComponent === 'editProfile'){
      return <EditProfile setCurrentComponent={setCurrentComponent}/>
    }else if (currentComponent === 'changePassword'){
      <ChangePassword />
    }
  }
    
    return (
      <>
      {renderComponent()}
      </>

  )
}

export default AdminProfile