'use client'
import React, {useCallback} from "react"

export default function Notify() {

    const sendNotification = () => {
        if('Notification' in window && Notification.permission === 'granted'){
            new Notification('Hello user!', {
                body: 'This is a notification from the app',
                icon: '/images/logo.png'
            })
        }
    };

    const requestNotificationPermission = useCallback(()=>{
        if('Notification' in window){
            Notification.requestPermission().then((permission) => {
                if(permission === 'granted'){
                    console.log('Permission granted');
                    sendNotification();
                }
            })
        }
    },[]);

    return (
        <div className="flex flex-col w-[400px] h-[500px] rounded-lg space-y-20">
            <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-center text-6xl text-white text-3xl font-bold p-4">Notify</h1>
            <p className="text-gray-400 text-xl font-semibold">Click to get a Notification!</p>
            </div>
            <div className="flex justify-center">
                <svg className="hover:rotate-12" width="300" height="300" viewBox="0 0 344 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="172" cy="172" r="50" fill="url(#paint0_linear_0_1)"/>
                <circle cx="172" cy="172" r="171.5" stroke="url(#paint1_linear_0_1)"/>
                <circle cx="172" cy="172" r="138.5" stroke="url(#paint2_linear_0_1)"/>
                <circle cx="172" cy="172" r="110.5" stroke="url(#paint3_linear_0_1)"/>
                <circle cx="172" cy="172" r="79.5" stroke="url(#paint4_linear_0_1)"/>
                <path d="M198.667 193.333H145.333V188H148V169.416C148 156.115 158.747 145.333 172 145.333C185.253 145.333 196 156.115 196 169.416V188H198.667V193.333ZM153.333 188H190.667V169.416C190.667 159.061 182.309 150.667 172 150.667C161.691 150.667 153.333 159.061 153.333 169.416V188ZM165.333 196H178.667C178.667 197.768 177.964 199.464 176.714 200.714C175.464 201.964 173.768 202.667 172 202.667C170.232 202.667 168.536 201.964 167.286 200.714C166.036 199.464 165.333 197.768 165.333 196Z" fill="url(#paint5_linear_0_1)"/>
                <defs>
                <linearGradient id="paint0_linear_0_1" x1="168.5" y1="245" x2="168.5" y2="119" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9D0D3D" stop-opacity="0"/>
                <stop offset="0.54096" stop-color="#DF512B" stop-opacity="0.76"/>
                <stop offset="1" stop-color="#BF8C2C"/>
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1="172" y1="0" x2="172" y2="344" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE722C"/>
                <stop offset="1" stop-color="#5E181A" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_0_1" x1="172" y1="33" x2="172" y2="311" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE722C"/>
                <stop offset="1" stop-color="#5E181A" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_0_1" x1="172" y1="61" x2="172" y2="283" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE722C"/>
                <stop offset="1" stop-color="#471514" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint4_linear_0_1" x1="172" y1="92" x2="172" y2="252" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE722C"/>
                <stop offset="1" stop-color="#5E181A" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint5_linear_0_1" x1="135.838" y1="178.023" x2="204.525" y2="178.023" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE722C"/>
                <stop offset="0.54096" stop-color="white"/>
                <stop offset="1" stop-color="#CE722C"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div className="flex justify-center">
                <button onClick={sendNotification} className="w-[300px] bg-gradient-to-r from-black via-orange-500 to-black text-white border border-orange-500 shadow-lg font-bold p-2 rounded-lg m-2 hover:text-black">Send Notification</button>
            </div>
        </div>
    )
};