import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";

const links = [
  {
    id:1,
    href: "/",
    title: "home"
  },
  {
    id:2,
    href: "/creator",
    title: "creator"
  }
]

export function Navbar() {
  return (
    <AppBar>
      <Toolbar sx={{ flex:1, justifyContent:'center'}}>
      {links.map(item => {
        return(
          <Link key={item.id}  href={item.href} style={{ textDecoration: 'none', margin: 20, color:'white' }}>
            {item.title}
         </Link>
        ) 
        })
      }
      </Toolbar>
    </AppBar>
  )
}