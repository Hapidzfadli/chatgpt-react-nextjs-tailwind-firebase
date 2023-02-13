import { SessionProvider } from "../components/SessionProvider"
import Sidebar from "../components/Sidebar"
import { getServerSession } from "next-auth/next"
import "../styles/globals.css"
import {authOptions} from "../pages/api/auth/[...nextauth]"
import Login from "../components/Login"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">

            {/* Sidebar */}
            <div className="bg-[#202123] max-w-ws h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar/>
            </div>
            {/* ClientProvider - Notification */}
  
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
          )}
        </SessionProvider>
        </body>
    </html>
  )
}
