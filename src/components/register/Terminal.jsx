
import leftBracket from './leftBracket.svg';
import rightBracket from './rightBracket.svg';
import { useSelector } from 'react-redux';

function Terminal() {



    const { RegisterInputsFocus } = useSelector(state => state.global); 



    return (
        <div className='rounded-lg overflow-hidden'>
            <div className="bg-gray-600 py-2 px-3 flex justify-between items-center">
                <div className="flex gap-x-1">
                    <span className='inline-block w-4 h-4 rounded-full bg-red-600'></span>
                    <span className='inline-block w-4 h-4 rounded-full bg-orange-600'></span>
                    <span className='inline-block w-4 h-4 rounded-full bg-green-600'></span>
                </div>

                <div className="-translate-x-1/4 text-sm text-zinc-900 font-bold">
                    #Registration/Info
                </div> 
                <div className=""></div>

            </div>
            <div className="bg-black bg-opacity-30 p-3">
                <span className='protest-font text-gray-300'>info /</span>$
                <img src={leftBracket} className='w-5 inline-block' alt="" />


                <div className="pl-4 flex items-center">
                    <span className='theme-text-color protest-font pr-1'>name: </span>
                    "{RegisterInputsFocus.name.value}{RegisterInputsFocus.name.active && <span className="terminalFlasher main-bg-color rounded-sm w-3 h-5 inline-block"></span>}",

                </div>
                <div className="pl-4 flex items-center">
                    <span className='theme-text-color protest-font pr-1'>email: </span>
                    "{RegisterInputsFocus.email.value}{RegisterInputsFocus.email.active && <span className="terminalFlasher main-bg-color rounded-sm w-3 h-5 inline-block"></span>}",

                </div>
                <div className="pl-4 flex items-center">
                    <span className='theme-text-color protest-font pr-1'>password: </span>
                    "{RegisterInputsFocus.password.value}{RegisterInputsFocus.password.active && <span className="terminalFlasher main-bg-color rounded-sm w-3 h-5 inline-block"></span>}",

                </div>
                <div className="pl-4 flex items-center">
                    <span className='theme-text-color protest-font pr-1'>phone: </span>
                    "{RegisterInputsFocus.phone.value}{RegisterInputsFocus.phone.active && <span className="terminalFlasher main-bg-color rounded-sm w-3 h-5 inline-block"></span>}",

                </div>



                <div className="-translate-x-1">
                    <img src={rightBracket} className='w-5 inline-block' alt="" />
                </div>
            </div>


        </div>
    )
}

export default Terminal