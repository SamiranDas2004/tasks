
import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Batches() {
  const [searchQuery, setSearchQuery] = useState('');
  const [rows,setRows]=useState(3)
  const data = [
    { id: '1', title: 'SQL Basics To Advanced Mastery Course', startDate: '20 Jul 2024', endDate: '28 Jul 2024', price: '₹ 0', validity: '180 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__' },
    { id: '2', title: '30 Days Of Javascript Challenge', startDate: '13 Jul 2024', endDate: '12 Aug 2024', price: '₹ 0', validity: '33 days', status: 'Unpublished', img: 'https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__' },
    { id: '3', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },
    { id: '4', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },
    { id: '5', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },
    { id: '6', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },
    { id: '7', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },
    { id: '8', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },
    { id: '9', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },

    { id: '10', title: 'Interview Preparation With Javascript 2.0', startDate: '02 Aug 2024', endDate: '15 Sep 2024', price: '₹ 10,000', validity: '365 days', status: 'Published', img: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__' },
  ];
const filterData=data.filter((item)=>item.title.toLowerCase().includes(searchQuery)).slice(0,rows)

  return (
    <div className="bg-purple-100 p-6 min-h-screen">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-900">Chai aur Code</h1>
        </header>
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Batches</h2>
          <p className="text-gray-700 mb-6">
            Create learner's batch and share information at the same time.
          </p>
          <div className="mb-6 flex">
            <input
              type="text"
              placeholder="Search by Title (alt+k or cmd+k)"
              className="border border-gray-300 rounded p-2 w-2/4 focus:outline-none focus:border-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="ml-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none">
              Search
            </button>
          </div>
          <table className="min-w-full  border border-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-a border-gray-800">Title</th>
                <th className="px-4 py-2 border-b border-gray-800">Start Date</th>
                <th className="px-4 py-2 border-b border-gray-800">End Date</th>
                <th className="px-4 py-2 border-b border-gray-800">Price</th>
                <th className="px-4 py-2 border-b border-gray-800">Validity/Expiry</th>
                <th className="px-4 py-2 border-b border-gray-800">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map(item => (
                <tr className="hover:bg-gray-100" key={item.id}>
                  <td className="px-4 py-2 border-b border-gray-200 flex items-center">
                    <img
                      src={item.img}
                      alt="Course Image"
                      className="w-12 h-12 rounded mr-4"
                    />
                    {item.title}
                  </td>
                  <td className="px-4 py-2 ">{item.startDate}</td>
                  <td className="px-4 py-2 ">{item.endDate}</td>
                  <td className="px-4 py-2 ">{item.price}</td>
                  <td className="px-4 py-2 ">{item.validity}</td>
                  <td className="px-4 py-2 ">
                    <span className={`text-sm font-semibold px-2 py-1 rounded ${
                      item.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-gray-700">Rows per page</p>
            <div className="relative">
              <select 
             value={rows}
              onChange={(e)=>setRows(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option >3</option>
                <option >6</option>
                <option > 10</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
               <ArrowDropDownIcon/>
              </div>
            </div>
            <div className="flex items-center">
              <button className="mr-2 p-2 bg-gray-200 hover:bg-gray-300 rounded focus:outline-none">
               <ChevronLeftIcon/>
              </button>
              <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded focus:outline-none">
               <ChevronRightIcon/>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Batches;
