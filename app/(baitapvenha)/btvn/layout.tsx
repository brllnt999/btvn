import { checkAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner";

export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await checkAuth();
    return (
        <>
            <div className="">
                {children}
            </div>
            <Toaster richColors />
        </>
    )
}