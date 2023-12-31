import React, { useEffect, useState } from 'react'

const Footer = ({totalPage,page,setPage}) => {
    // const[page,setPage] = useState(1);

    const result ='';
    console.log(totalPage);
    const handlePage = ()=>{
        const page=[];
        for(let i=1;i<=totalPage;i++){
            page.push(i);
        }
console.log(page);

        return page;
    }

   const pageNumber = handlePage();


   const firstPage = ()=>{
        setPage(1);
   }
   const previousPage = ()=>{
    setPage(prev=>prev-1);
    if(page<=1){
        setPage(1);
    }
    
   }
   const nextPage = ()=>{
    setPage(prev=>prev+1);
   }
   const lastPage = ()=>{
    setPage(totalPage);
   }
   const handlePageNumber = (page)=>{
    setPage(page);
   }

   
  return (
    <div>
    
        <button>Delete</button>
        <button disabled={page==1} onClick={firstPage}>{"<<"}</button>
        <button disabled={page==1} onClick={previousPage}>{"<"}</button>
        {
            pageNumber.map(page=>(
                <button key={page.id} onClick={()=>handlePageNumber(page)}>{page}</button>
            ))
        }
        <button disabled={page==totalPage} onClick={nextPage}>{">"}</button>
        <button disabled={page==totalPage} onClick={lastPage}>{">>"}</button>
    </div>
  )
}

export default Footer