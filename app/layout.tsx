import Sidebar from "../components/Sidebar"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">

          {/* Sidebar */}
          <div className="bg-[#202123] max-w-ws h-screen overflow-y-auto md:min-w-[20rem]">
            <Sidebar/>
          </div>
          {/* ClientProvider - Notification */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>

        
        </body>
    </html>
  )
}
