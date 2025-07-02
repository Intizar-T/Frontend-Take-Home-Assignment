import Image from "next/image";

export default function Home() {
  return (
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
      
          <button className="bg-gray-950 text-white px-4 py-2 rounded"><a href="/signin">Sign In</a></button>
          <button className="bg-gray-950 text-white px-4 py-2 rounded ml-10"><a href="/signup">Sign Up</a></button>
        </div>
      </div>
  );
}
