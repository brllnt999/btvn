import React from 'react'
import BaiTapVeNha from './BaiTapVeNha'
import { checkAuth, getUserAuth } from '@/lib/auth/utils'
import { getAllUsers } from '@/lib/api/users/queries'

const page = async () => {
    await checkAuth()
    const {allUsers} = await getAllUsers()
    const {session} = await getUserAuth()
  return (
    <div>
        <BaiTapVeNha allUsers={allUsers} session={session}/>
    </div>
  )
}

export default page