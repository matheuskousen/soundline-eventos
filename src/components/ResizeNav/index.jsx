import React from 'react';
import Link from 'next/link'
import { Container } from './styles';

const ResizeNav = () => {
  return (
    <Container>
       
                  <div className="close-btn">close</div>

                  <ul id="menu">
                  <li>
          
          <Link href="/" ><a>home.</a></Link>

          </li>
          <li>
          <Link href="/works"><a>work.</a></Link>
          </li>
          <li>
          <Link href="/about"><a>about me.</a></Link>
          </li>
          <li>
          <Link href="/" ><a>contact.</a></Link>
          </li>
                  </ul>
            
    </Container>
  );
};

export default ResizeNav;
