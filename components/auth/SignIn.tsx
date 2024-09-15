import { getUserAuth } from "@/lib/auth/utils";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function SignIn() {
  const { session } = await getUserAuth();
  if (session) {
    return (
      <div>
        <LogoutLink className="hover:underline">Log out</LogoutLink>
      </div>
    );
  } else {
    return (
      <div className="w-full space-y-4 pt-4">
        <LoginLink className="text-center block hover:bg-neutral-900 bg-neutral-800 text-neutral-50 px-4 py-2 rounded-lg">
          Sign in
        </LoginLink>
        <RegisterLink className="text-center block hover:bg-neutral-200 bg-neutral-100 text-neutral-800 px-4 py-2 rounded-lg">
          Sign up
        </RegisterLink>
      </div>
    );
  }
};

