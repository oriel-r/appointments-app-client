import React, { useEffect, useState } from 'react'
import AppointmentGroup from '../../components/Appointments/AppointmentGroup'

const AppointmentsView = ({user}) => {

  return (
      <div>
        <AppointmentGroup user={user}/>
      </div>
    )

}


export default AppointmentsView

