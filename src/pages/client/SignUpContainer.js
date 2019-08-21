import React from 'react'
import Signup from "../../pages/admin/Signup";
import withAuth from "../../components/withAuth";

function SignUpContainer(props) {
  return (
    <div>
      <Signup doSignUp={props.signup}/>
    </div>
  )
}
export default withAuth(SignUpContainer)
