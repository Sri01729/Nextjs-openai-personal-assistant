'use client'


import { useChat } from "ai/react"
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaRobot, FaUser } from 'react-icons/fa'
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Chat() {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/langchainWithTemplate',
        onError: (e) => { console.log(e) }
    });

    const chatParent = useRef<HTMLUListElement>(null)

    // Chnage speaker color on clicking
    const [color, setColor] = useState('#808080')
    const [isPlaying, setIsPlaying] = useState(true)

    const handleSpeech = (input: string) => {

        setColor(color === '#121212' ? '#aaaaaa' : '#121212')
        const msg = new SpeechSynthesisUtterance(input);
        if (isPlaying) {
            window.speechSynthesis.speak(msg);
            setIsPlaying(false)
        } else {
            window.speechSynthesis.cancel();
            setIsPlaying(true)
        }
    }

    useEffect(() => {
        const domNode = chatParent.current
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight
        }
    })

    return (

        <main className="flex flex-col w-full h-[75vh] ">
            <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
                <ul ref={chatParent} className="h-1 p-4 flex-grow  rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, index) => (
                        <>
                            {m.role === 'user' ? (
                                <li key={index} className="flex flex-row-reverse">
                                    <div className='flex m-2 p-2 items-center'>
                                        <FaUser size={14} color="#808080" />
                                    </div>
                                    <div className="rounded-xl p-4 bg-background shadow-md flex">
                                        <p className="text-primary">{m.content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li key={index} className="flex flex-row">
                                    <div className='flex m-2 p-2 items-center'>
                                        <FaRobot size={24} color="#808080" />
                                    </div>
                                    <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4 ">
                                        <p className="text-primary flex-grow overflow-hidden text-ellipsis">
                                            <span className="font-bold"></span>{m.content}
                                        </p>
                                        <HiMiniSpeakerWave
                                            color={color}
                                            size={18}
                                            className="ml-1 flex-shrink-0"
                                            onClick={() => handleSpeech(m.content)}
                                        />
                                    </div>

                                </li>
                            )}
                        </>
                    ))}
                </ul >
            </section>
            <section className="p-4">
                <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                    <Input
                        className="flex-1 min-h-[40px] bg-background text-black dark:text-white" // Dynamically apply text color
                        placeholder="Type your question here..."
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <Button className="ml-2 pt-4 pb-4 border bg-transparent text-foreground" type="submit">
                        Submit
                    </Button>
                </form>
            </section>

        </main>

    )
}

