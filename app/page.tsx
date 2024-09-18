import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserAuth } from "@/lib/auth/utils";
import { Avatar, Link } from "@nextui-org/react";


export default async function LandingPage() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { session } = await getUserAuth()
  const avatar = session?.user.picture as string
  console.log(avatar)
  return (
    <div className="grid place-content-center h-[100vh]">
      <div className="grid grid-rows-2  md:grid-cols-2 place-content-center justify-items-center">
        <p className="text-8xl font-black scale-y-150 scale-x-75 md:translate-y-4 ">BTVN</p>
        {!isUserAuthenticated ?
          <Link className="w-3/4"  href="/sign-in">
            <Button className="w-full" variant="solid" > Log In </Button>
          </Link> :
          <div className="flex flex-cols gap-4 items-center justify-between">
            <Avatar src={avatar} />
            <LogoutLink className="text-lg hover:underline">Log out</LogoutLink>
          </div>
        }
      </div>

    </div>
  );
}


