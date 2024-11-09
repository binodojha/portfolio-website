
export default function ContactMe() {


    return (
        <>
            <div className="contanct_container py-12">
                <h2 className="font-bold text-4xl text-center pb-10">Contact</h2>
                <div className="flex justify-center">
                    <div className=" w-1/3">
                        <form action="" className="text-black text-xl">
                            <input type="text" placeholder="Your Name" className="w-full  rounded-sm p-1" />
                            <br />
                            <input type="email" placeholder="Your Email " className="w-full rounded-sm p-1 mt-5" />
                            <br />
                            <input type="text" placeholder="Subject" className="w-full  rounded-sm p-1 mt-5 " />
                            <br />
                            <textarea name="" id="" placeholder="Write your message here" className="w-full h-32 mt-5 rounded-sm "></textarea>
                            <button className=" text-white font-bold p-2 rounded-lg mt-3 hover:bg-blue-800 bg-green-500">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}