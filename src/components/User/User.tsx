import { FunctionComponent } from "react"
import './User.css'

export interface UserProps {
  userName: string
  userPicture: string
}

const User: FunctionComponent<UserProps> = ({userName, userPicture}) => {
  return (
    <div className="user">
      <div className="user--picture"><img src={userPicture} /></div>
      <div className="user--name">{userName}</div>
    </div>
  )
}

export default User
