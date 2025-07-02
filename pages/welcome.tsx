import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Image from 'next/image';

export default function welcome() {
    const router = useRouter();
    const [fullname, setUsername] = useState("");

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if(!savedUser) {
            router.push("/signin");
        } else {
            const parsedUser = JSON.parse(savedUser);
            setUsername(parsedUser.fullname);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        router.push("/");
    };

    return(
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md p-8 rounded text-center">
                <div className="mb-15 flex justify-center">
                    <Image
                        src="/xmobile_logo.png"
                        alt="logo"
                        width={220}
                        height={100}
                    />
                </div>
                <h1 className="text-2xl font-bold mb-4">Welcome, {fullname}</h1>
                <p className="mb-6">You have successfully signed in🎉</p>

                <button onClick={handleLogout} className="bg-gray-950 text-white px-4 py-2 rounded">Logout</button>
            </div>
        </div>
    )
}