import React from 'react'
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux'

function Output() {

    const { dataToReceive, loading } = useSelector(state => state.apis.textSummarize);
    const { type } = useSelector(state => state.apis.textSummarize.dataToSend);

    return (
        <div className='bg-gray-300 bg-opacity-20 rounded-lg overflow-hidden '>
            <div className="main-bg-color px-5 py-2">
                <h3>Summarized Text</h3>
            </div>

            <div style={{
                minHeight: '200px'
            }} className="px-5 py-6 relative">
                {
                    loading && <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center z-40">
                        <Rings height={200} width={200} color='#8018e0' />
                    </div>
                }
                {
                    type === 'text' ? dataToReceive.summary :
                        <ul className="list-disc px-5">
                            {
                                dataToReceive.sentences &&
                                dataToReceive.sentences.map((sent, index) => <li key={index}>
                                    {sent}
                                </li>)
                            }
                        </ul>
                }
            </div>


        </div>
    )
}

export default Output