import React from 'react'

const Recent_news = (props) => {
  return (
    <div className='grid grid-cols-2'>
        <div className='p-3 ml-3'>
            <h1 className='text-3xl font-semibold'>{props.news[3]?.title}</h1>
            <img src={props.news[3]?.urlToImage} className='mt-3'/>
        </div>
        <div className='grid grid-cols-2'>
            <div className='p-2 ml-3'>
                <img src ={props.news[2]?.urlToImage}/>
                <h1 className='text-lg font-semibold mt-3 p-2 ml-3'>{props.news[2]?.title}</h1>
                <h4>{props.news[2]?.content}</h4>
            </div>
            <div className='p-2 ml-3'>
            <img src ={props.news[6]?.urlToImage} className='ml-3'/>
            <h1 className='text-lg font-semibold mt-3 ml-3'>{props.news[6]?.title}</h1>
            <h4>{props.news[6]?.content}</h4>
            </div>
        </div>
    </div>
  )
}

export default Recent_news