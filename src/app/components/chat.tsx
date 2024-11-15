'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useChat } from "ai/react"
import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { FaRobot, FaUser } from 'react-icons/fa'

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const chatParent = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const domNode = chatParent.current
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight
        }
    })

    return (
        <StyledWrapper>
            <main className="flex flex-col w-full h-screen max-h-dvh bgcontainer">

                <header className="p-4 border-b w-full max-w-3xl mx-auto">
                    <h1 className="text-2xl text-center font-bold text-white">Personal Assistant</h1>
                </header>

                <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl chatContainer">
                    <ul ref={chatParent} className="h-1 p-4 flex-grow  rounded-lg overflow-y-auto flex flex-col gap-4">
                        {messages.map((m, index) => (
                            <>
                                {m.role === 'user' ? (
                                    <li key={index} className="flex flex-row-reverse">
                                        <div className='flex m-2 p-2 items-center'>
                                            <FaUser size={14} color="white" />
                                        </div>
                                        <div className="rounded-xl p-4 bg-background shadow-md flex">
                                            <p className="text-primary">{m.content}</p>
                                        </div>
                                    </li>
                                ) : (
                                    <li key={index} className="flex flex-row">
                                        <div className='flex m-2 p-2 items-center'>
                                            <FaRobot size={24} color="white" />
                                        </div>
                                        <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4">
                                            <p className="text-primary"><span className="font-bold"> </span>{m.content}</p>
                                        </div>
                                    </li>
                                )}
                            </>
                        ))}
                    </ul >
                </section>
                <section className="p-4">
                    <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                        <Input className="flex-1 min-h-[40px]" placeholder="Type your question here..." type="text" value={input} onChange={handleInputChange} />
                        <Button className="ml-2" type="submit">
                            Submit
                        </Button>
                    </form>
                </section>
            </main>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  .chatContainer {
  background-color: black;
    background-image: radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0);
    background-size: 30px 30px;
    background-position: -5px -5px
  }
    .bgcontainer {
    background: repeating-radial-gradient(circle, #000, #000 5px, transparent 6px);
  background-size: 30px 30px;
  }

`;