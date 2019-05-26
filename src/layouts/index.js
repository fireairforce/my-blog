import './index.css'
import Header from './header'

export default function (props) {
  if (props.location.pathname === '/') {
     return <div>{props.children}</div>      
  }
  return(
      <>
      <Header />
       {props.children}
      </>
  )
}
