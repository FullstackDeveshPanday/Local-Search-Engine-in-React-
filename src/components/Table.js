import React,{useState} from 'react'
import LocalSearch from './LocalSearch';


const Table = ({data}) => {
    const [keyword ,setKeyword]=useState("");
    const searched = (keyword) => (c) => c.title.toLowerCase().includes(keyword)
    return (
        <div>
            <LocalSearch keyword={keyword} setKeyword={setKeyword} />
            <table className="table table-bordered mt-5">
                <thead>
                    <tr className="text-center">
                        <th>Title</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data.filter(searched(keyword)).map((data) =>{
                        return (
                            <tr key={data.id}>
                                <td>{data.title}</td>
                                <td>{data.price}</td>
                                <td> <img src={data.img} width="100" height="100" className="img-fluid" alt="" /></td>
                                <td>{data.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
