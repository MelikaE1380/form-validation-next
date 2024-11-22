'use client'



function Header() {

    return (
       <>
       
       <div className="flex w-full justify-between">
            <div>

                <div className="border-[2px] m-[15px] px-[5px] py-[4px] text-[#E16272] border-[#E16272] rounded-md">
                    <p>لغو درخواست</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-end p-[15px]">

                <div><p className="font-bold">فرم درخواست</p></div>
                <div><p className="text-[#888C90]">ارسال رزومه برای شغل : تست</p></div>

            </div>
        </div>

       <div className="flex justify-center">
       <hr className="w-[98%] border-[#A199D6] border-[1.5px]" />
       </div>
       </>
    )
}

export default Header;