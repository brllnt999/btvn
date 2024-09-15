
import SignIn from "@/components/auth/SignIn";

export default function LandingPage() {
  return (
    <div className="grid place-content-center h-[100vh]">
      <div className="grid grid-rows-2 md:grid-cols-2 place-content-center">
        <p className="text-8xl font-black scale-y-150 scale-x-75 translate-y-4 ">BTVN</p>       
          <SignIn />      
      </div>
      
    </div>
  );
}


