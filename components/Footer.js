import Link from 'next/link';
import FooterStyles from './styles/FooterStyles.js';

export default function Footer() {
  return (
    <FooterStyles>
      <div id="footer">
        <div id="top" />
        <div id="left">
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>Delivery Information</li>
            <li>Corporate Responsibilities</li>
            <li>_</li>
          </ul>
        </div>
        <div id="center">
          <ul>
            <li className="link">
              <Link href="/contact">Contact Us</Link>
            </li>

            <li>Twitter</li>
            <li className="link">
              <Link href="https://www.facebook.com/Ataire-Online-100820485545533">
                Facebook
              </Link>
            </li>
            <li>Instagram</li>
          </ul>
        </div>
        <div id="right">
          <ul>
            <li>Change Language</li>
            <li>Change Region</li>
            <li>_</li>
            <li>Copyright &copy; Ataire 2021</li>
          </ul>
        </div>
        <div id="bottom" />
      </div>
    </FooterStyles>
  );
}
