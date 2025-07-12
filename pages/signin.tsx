import React, {useState} from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
// import { json } from "stream/consumers";

export default function signIn() {
    const router = useRouter();
    const [form, setForm] = useState({username: "", password: "", password2: "", fullname: "", phone: ""});
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const savedUser = localStorage.getItem("user");
        if(!savedUser) {
            setError("No account found. Please sign up first.");
            return;
        }

        const parsedUser = JSON.parse(savedUser);

        if(
            form.username === parsedUser.username &&
            form.password === parsedUser.password
        ) {
            router.push("/welcome");
        } else {
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <a href="/">{"<"}</a>
            <div className="w-full max-w-md p-8 rounded">
                <div className="flex justify-center mb-15">
                    <Image
                        src="/xmobile_logo.png"
                        alt="logo"
                        width={220}
                        height={100}
                    />
                </div>
                <h1 className="text-2xl font-medium text-center">Log In</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input type="text" name="username" className="w-full p-3 border border-gray-300 rounded-xl" value={form.username} onChange={handleChange} placeholder="Text your email"/>
                    </div>

                    <div className="relative">
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input type="password" name="password" className="w-full p-3 border border-gray-300 rounded-xl"  value={form.password} onChange={handleChange} placeholder="Text your password"/>
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button type="submit" className="w-full p-3 text-white bg-gray-950 rounded-xl mt-7">Log In</button>
                </form>


            </div>
        </div>
    )
}