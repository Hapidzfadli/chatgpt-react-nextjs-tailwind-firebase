"use client"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSwr from 'swr';

type Props = {
    chatId : string;
}
function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState("");
    const {data: session} = useSession();

    //useSwr to get model
    const {data: model} = useSwr('model', {
        fallbackData: 'text-davinci-003'
    })

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image!,
            }
        }

        await addDoc(
            collection(
                db, 
                'users', 
                session?.user?.email!, 
                'chats', 
                chatId, 
                'messages'), 
                message)

        // Toast notification
        const notification = toast.loading('ChatGPT is thinking...');

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(() => {
            toast.success('ChatGPT has responded!', {
                id: notification,
            })
        })
    }
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
        <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
            <input className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 " type="text"
            disabled={!session}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
                placeholder="Type your message here..."
            />
            <button disabled={!session && !prompt} type="submit" className="bg-[#11A37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-300">
                <PaperAirplaneIcon className="w-4 h-4 -rotate-45"/>
            </button>
        </form>
        <div className="md:hidden lg:hidden">
            <ModelSelection/>
        </div>
    </div>
  )
}

export default ChatInput