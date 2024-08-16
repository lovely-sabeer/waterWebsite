import React, { useEffect, useState } from 'react'


function GetTotal() {
	const [emptyData, setEmptyData] = useState()
	const url = "http://localhost:3001";

	// const getData = () => {
  //       fetch(url + "/emptyRecieve")
  //       .then(response => response.json())
	//     	.then(data => setEmptyData(data))
	// }
	// useEffect(() => {
	// 	getData()
	// 	console.log(emptyData)
		
	// },[])
}

export default GetTotal