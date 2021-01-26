import React from 'react'; 
import FooterStamp from '../atoms/FooterStamp'

const Footer = (): JSX.Element => {

  return (
    <footer>
      <div>
        <div>
          Drop the bit. 
        </div>
        <div>
          © All rights reserved 2021
        </div>
      </div>
      <FooterStamp />
    </footer>
  )
}

export default Footer; 