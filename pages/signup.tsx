import React, {useState} from "react";
import {useRouter} from "next/router";
import Image from 'next/image';

export default function signUp() {
    const router = useRouter();

    const [form, setForm] = useState({username: "", password: "", password2: "", fullname: "", phone: ""});
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!form.username || !form.password || !form.password2 || !form.fullname || !form.phone) {
            setError("All fields are required.");
            return;
        }

        if(form.password !== form.password2) {
            setError("Passwords do not match.");
            return;
        }

        if(form.password.length < 8) {
            setError("Password must contain more than 8 characters.");
            return;
        }

        if(!form.username.includes('@')) {
            setError("Please text acceptable email.");
            return;
        }


        localStorage.setItem("user", JSON.stringify(form));
        router.push("/signin");
    };

    return (
        <div className="flex items-center justify-center minh-h-screen">
            
            <div className="w-full max-w-md p-8">
                <div className="flex justify-center mb-15">
                    <Image
                        src="/xmobile_logo.png"
                        alt="logo"
                        width={220}
                        height={100}
                    />
                </div>
                <h1 className="mb-6 text-2xl font-semibold text-center text-black">Sign Up</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Full Name</label>
                        <input type="text" name="fullname" className="w-full p-3 border border-gray-300 rounded-xl" placeholder="Text your fullname" onChange={handleChange} value={form.fullname}/>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Phone</label>
                        <input type="text" name="phone" className="w-full p-3 border border-gray-300 rounded-xl" placeholder="Text your phone number" onChange={handleChange} value={form.phone}/>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input type="text" name="username" className="w-full p-3 border border-gray-300 rounded-xl" placeholder="Text your email" value={form.username} onChange={handleChange} />
                    </div>

                    <div className="relative">
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input type="password" name="password" className="w-full p-3 border border-gray-300 rounded-xl" value={form.password} onChange={handleChange} placeholder="Text your password"/>
                    </div>

                    <div className="relative">
                        <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                        <input type="password" name="password2" className="w-full p-3 border border-gray-300 rounded-xl" value={form.password2} onChange={handleChange} placeholder="Text your password again"/>
                    </div>

                    {error && <p className="font-bold text-red-500 text-l">{error}</p>}

                    <button type="submit" className="w-full p-3 mt-5 text-white bg-black rounded-xl hover:bg-gray-950">Sign Up</button>
                </form>
            </div>
        </div>
    );
}