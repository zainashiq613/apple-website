import { footerLinks } from '../constraints';

function Footer() {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray-500 text-xs">
            More ways to shop: <span className="underline text-blue-500">Find an Apple Store</span>{' '}
            or <span>other retailer</span> near you
          </p>
          <p className="font-semibold text-gray-500 text-xs">Or call 0008800088</p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col justify-between md:items-center">
          <p className="font-semibold text-gray-500 text-xs">
            Copyright @2025 Apple Inc. All rights reserved
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p key={link} className="font-semibold text-gray-500 text-xs">
                {link} {index !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
