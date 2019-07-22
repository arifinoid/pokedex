import * as React from 'react'
import Link from 'next/link'

const Navbar: React.FunctionComponent<any> = () => (
  <nav>
    <Link href="/">
      <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="test" />
      <span>Back</span>
    </Link>
  </nav>
)

export default Navbar
