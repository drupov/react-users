import { FunctionComponent } from 'react'
import User, { UserProps } from '../User/User'

interface UsersProps {
  data: UserProps[]
}

const Users: FunctionComponent<UsersProps> = ({data}) => {
  return (
    <div>
      {data && data.map((item: any) => {
        const username = item.login.username
        return (
          <User
            key={username}
            userName={username}
            userPicture={item.picture.large}
          />
        )
      })}
    </div>
  )
}

export default Users
