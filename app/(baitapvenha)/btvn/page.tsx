import React from 'react'
import BaiTapVeNha from './BaiTapVeNha'
import { checkAuth, getUserAuth } from '@/lib/auth/utils'
import { getAllUsers } from '@/lib/api/users/queries'

const page = async () => {
    await checkAuth()
    const {allUsers} = await getAllUsers()
    const {session} = await getUserAuth()
    const userId = session?.user.id || ""
  return (
    <div>
        <BaiTapVeNha allUsers={allUsers} userId={userId}/>
    </div>
  )
}

export default page