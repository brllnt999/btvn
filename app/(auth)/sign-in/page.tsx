import SignIn from "@/components/auth/SignIn";

const Page = async () => {
  return (
    <main className="bg-popover max-w-lg mx-auto my-4 rounded-lg p-10">
      <h1 className="text-2xl font-bold text-center">
        Sign in to your account
      </h1>
      <div className="">
        <SignIn />
      </div>
    </main>
  );
};

export default Page;
