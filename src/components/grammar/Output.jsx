import { useDispatch, useSelector } from "react-redux"
import { FaCheckCircle } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { setTextSummarizeText } from "../../redux/slices/APIs";


function Output({ textarea }) {

    const { dataToReceive } = useSelector(state => state.apis.textSummarize);




    const dispatch = useDispatch();

    function handleErrorFix(e, param) {



        if (e.target.nodeName === 'SPAN') {
            e.target.classList.add("hidden");
            e.target.nextElementSibling.classList.remove("hidden");
        } else {
            e.target.children[0].classList.add("hidden");
            e.target.children[1].classList.remove("hidden");
        }




        if (textarea.current.value.includes(param.bad)) {
            const tmp = textarea.current.value.replace(param.bad, param.better[0])
            textarea.current.value = tmp;
            dispatch(setTextSummarizeText(tmp));
        }

    }

    return (
        <div className="h-full">

            {
                dataToReceive && <div className="h-full ">
                    {
                        dataToReceive.response.errors.length === 0 && <div className="flex flex-col items-center justify-center h-full">
                            <FaCheckCircle size={40} />
                            <div className="py-2 uppercase">
                                everything is well...
                            </div>
                        </div>
                    }


                    <div className="flex flex-col gap-y-3">
                        {
                            dataToReceive.response.errors.map(error => <div className="flex gap-x-10 items-center justify-between">
                                <div className="">
                                    <span className="text-red-500 bg-red-100 px-2 rounded-full">
                                        {error.bad}
                                    </span>
                                    <div className="mt-1">
                                        <div className="flex items-center gap-x-2">
                                            <FaAnglesRight />
                                            <span className="px-4 mr-2 rounded-full text-green-700 bg-green-100">{
                                                error.better[0]
                                            }</span>
                                        </div>
                                        {
                                            error.description.en
                                        }
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => {
                                        handleErrorFix(e, error)
                                    }}

                                    className="main-bg-color main-bg-color-hover px-5 py-2 rounded-full">
                                    <span className="">
                                        fix
                                    </span>
                                    <FaCheckCircle className="hidden" />
                                </button>

                            </div>)
                        }
                    </div>



                </div>
            }


        </div>
    )
}

export default Output