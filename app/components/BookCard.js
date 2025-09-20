"use client";
function BookCard({bookImg, title,desc,onBorrowClick}){
    return (
        <div style={{
                display: 'flex', 
                flexDirection: 'row',
                height:"190px",
                width: '300px', 
                 backgroundColor:'#caf0f8',
                borderRadius:'20px',
                padding: '10px',
                margin:"10px"
              }}>
           <img src={bookImg}/>
            <div style={{
                marginLeft:"10px",
                display: 'flex',
               flexDirection:"column"
            }}>
                <div style={{fontSize:"15px",fontWeight:"bold"}}>
                    {title}
                </div>
                
                <div style={{fontSize:"12px",fontWeight:"medium"}}>{desc}</div>
                <button style={{
                    backgroundColor:'red',
                     height:"50px",
                     width: "100px",
                     color:"white",
                     padding:"10px",
                     marginTop:"20px",
                     borderRadius:"25px"}}
                     onClick={(clicked)=> onBorrowClick()}
                     >
                    Borrow
                </button>
            </div>
        </div>
    )
}
//Exporting the variables / functions;
export default BookCard;