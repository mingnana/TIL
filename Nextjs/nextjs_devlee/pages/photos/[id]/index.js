import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const index = ({photo}) => {
    const {title, url} = photo
  return (
    <div>
        <h2>image{title}</h2>
        <img
            src={url}
            width={500}
            height={500}
        />    
        <Link href="/photos">
            <a>go back</a>    
        </Link>       
    </div>
  )
}

export const getStaticProps = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/2`)
    const photo = await res.json();
    return {
        props:{
            photo
        }
    }
}
export const getStaticPaths = async ()=>{
    return {
        paths : [
            {
                params : {id:'1'},
            },
            {
                params : {id:'2'},
            },
            {
                params : {id:'3'},
            },
        ],
        fallback:false,
    }
}
export default index
