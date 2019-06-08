import './index.less'
import Header from './header'

export default function (props) {
  if (props.location.pathname === '/') {
     return <div>{props.children}</div>      
  }
  return(
       <>
       <Header />
       <div className="content-top">
       {props.children}
       </div>
      </>
  )
}
