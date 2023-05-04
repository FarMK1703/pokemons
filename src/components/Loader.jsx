import React from 'react'

export default function Loader() {
 return (
    <div style={{width:'100%',height:'100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}
