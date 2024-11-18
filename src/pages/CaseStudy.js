import { Viewer } from '@react-pdf-viewer/core';
import React from 'react'
import { Bell, Bookmark, ChevronRight, Download, Home, Share, Share2 } from 'react-feather';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FeaturedSolution from '../components/FeaturedSolution';
import axios from 'axios'

const CaseStudy = () => {
const { id } = useParams();
const navigate = useNavigate();
React.useEffect(() => {
//  fetchPdf()

}, [])

const downloadPdf=async()=>{
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJzdWZpeWFuLmluYW1kYXJAZGVtYW5kYXkuaW5mbyIsImlhdCI6MTczMTY2MzAzMCwiZXhwIjoxNzMyMDIzMDMwfQ.sMAYazo4FLLxGtVQofp4pmH0szcIASPUZCjhjHGg6Hsd8BTDv-O4pmi2Q_5xsu78keCbk9PimqpTUsTXdZqtvg'
const config = {
  // responseType: 'blob',
  headers: {
    'Authorization': `Bearer ${token}`,
  }
};
  const data = await axios.get("https://141.136.35.203:8443/api/user/download-pdf?id=16",config)

  console.log("pdfData",data.data)
}

const fetchPdf=async()=>{
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJzdWZpeWFuLmluYW1kYXJAZGVtYW5kYXkuaW5mbyIsImlhdCI6MTczMTY2MzAzMCwiZXhwIjoxNzMyMDIzMDMwfQ.sMAYazo4FLLxGtVQofp4pmH0szcIASPUZCjhjHGg6Hsd8BTDv-O4pmi2Q_5xsu78keCbk9PimqpTUsTXdZqtvg'
const config = {
  responseType: 'blob',
  headers: {
    'Authorization': `Bearer ${token}`,
  }
};
try {
  const data = await axios.get("https://141.136.35.203:8443/api/user/view-pdf?id=16",config)
  console.log("pdfData",data)
} catch (error) {
    console.log("error",error)
}
  
}
  return (
    <div>
    <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4">
      <div className="flex items-center gap-2 text-[#4702a2]">
        <Link to="/home">
          <Home className="text-[#4702a2]" size={20} />
        </Link>
        <ChevronRight className="text-[#4702a2]" size={20} />
        <Link to="/whitepapers" className="text-gray-700 text-sm no-underline">
          WHITEPAPERS
        </Link>
        <ChevronRight className="text-[#4702a2]" size={20} />
        <Link to={`/casestudy/${id}`} className="text-gray-700 text-sm no-underline">
          CaseStudy
        </Link>
      </div>
    </header>
        <div className='md:w-[90%] items-start flex flex-col-reverse gap-3  lg: lg:flex-row justify-center lg:h-screen bg-[#f0f1f2] m-auto p-4'>
            <div onClick={()=>{navigate("/view-casetudy/view")}} className="relative cursor-pointer overflow-hidden sm:w-full w-full lg:w-1/3 h-[60vh] lg:h-4/6 rounded-md group order-1 lg:order-3 flex items-center">  
              <div className=' m-auto w-3/4 lg:w-full h-full mr-3 '> 
                <Viewer className="border-2 border-purple-600"  fileUrl={"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"} initialPage={1} defaultScale={0.7} />
                </div>
            </div>
            <div className='w-full lg:w-4/6 order-2'>
                <div className='w-full flex-wrap flex flex-col'>
                <div>
                    <h1 className='font-semibold'>Heavy-Duty Automotive Parts Distributor Uses Artificial Intelligence and Predictive Sales Analytics to Increase Sales Revenue by 20%</h1>
                    <p className='font-bold text-slate-400'>Vendor</p>
                </div> 
                <div>
                    <p className='text-xl leading-8 line-clamp-5 lg:line-clamp-none'>
                    Heavy-Duty Automotive Parts Distributor Uses  
                    Artificial Intelligence and Predictive Sales Analytics to  
                    Increase Sales Revenue by 20% 
                    How this leading B2B enterprise increased revenue and profit by using an AI-driven solution 
                    to identify and deliver actionable customer opportunties in real-time to its 400+ sales reps.
                    Challenge
                    The company needed to overcome 
                    flat growth in a highly-competitive 
                    marketplace, with high customer 
                    attrition rates.
                    Solution
                    The company implemented Zilliant IQTM, enabling them to:
                    • Enrich its CRM with actionable, real-time sales guidance for its reps, driving greater efficiency and effectiveness  
                    • Use AI and predictive sales analytics to uncover and deliver the best sales opportunities at scale
                    </p>
                </div>  
                </div>
            <button className='  bg-gradient-to-r from-teal-400 to-purple-500 text-white px-6 py-2 rounded  '>Join for Free </button>
            </div>
          <div className='flex justify-end lg:flex-col gap-3 order-3 lg:order-1'>
            <Download onClick={downloadPdf} className='text-[#4702a2] cursor-pointer' size={30} />
            <Bell onClick={fetchPdf} className='text-[#4702a2] cursor-pointer' size={30} />
            <Share2 className='text-[#4702a2] cursor-pointer' size={30} />
          </div>
        </div>
        <FeaturedSolution/>
    </div>
  )
}

export default CaseStudy