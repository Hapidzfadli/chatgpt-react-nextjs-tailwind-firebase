import { SessionProvider } from "../components/SessionProvider"
import Sidebar from "../components/Sidebar"
import { getServerSession } from "next-auth/next"
import "../styles/globals.css"
import {authOptions} from "../pages/api/auth/[...nextauth]"
import Login from "../components/Login"
import ClientProvider from "../components/ClientProvider"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  
  return (
    <html>
      <head />
      <body className="h-screen overflow-scroll">
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">

            <div className="bg-[#202123] min-w-[3rem] max-w-ws lg:max-w-sm md:lg:max-w-sm h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar/>
            </div>
            
            <ClientProvider/>

            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
          )}
        </SessionProvider>
        </body>
    </html>
  )
}
