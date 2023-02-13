"use client"
import { useSession } from "next-auth/react"
import NewChat from "./NewChat"

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* New Chat */}
                <NewChat/>
                <div>
                    {/* Model Selection */}
                </div>
                
                {/* Map through the chat Rows */}
            </div>

            
        </div>
        {session && (
              <img src={session.user?.image!} alt="Profile Picture" className="h-12 rounded-full w-12 cusor-pointer mx-auto mb-2 hover:opacity-50" />
            )}
    </div>
  )
}

export default Sidebar