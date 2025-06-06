import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const FooterComp = () => {
  return (
    <>
      <footer className="">
        <div className=" h-12 bg-purple-700 flex justify-between items-center px-5 text-white">
          <div>
            <p className="">Get connected with us social networks:</p>
          </div>
          <div className="flex gap-5">
            <FaFacebookF />
            <FaGoogle />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
        <div className="  h-60 bg-purple-800 text-white flex gap-60 p-2">
          <div className="">
            <h1 className="mt-2">Company Name</h1>
            <br />
            <p className="w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              beatae natus et debitis possimus voluptatibus vitae autem fuga
              eius reprehenderit ducimus ut sapiente cum eaque, quam, optio
              consequatur vel odit?
            </p>
          </div>
          <div className="">
            <h1 className="mt-2">Product</h1>
            <br />
            <ul>
              <li>MDBootstrap</li>
              <li>MD WordPress</li>
              <li>BrandFlow</li>
              <li>Bootstrap Angular</li>
            </ul>
          </div>
          <div className="">
            <h1 className="mt-2">Useful Links</h1>
            <br />
            <ul>
              <li>Your Account</li>
              <li>MD WordPress</li>
              <li>BrandFlow</li>
              <li>Bootstrap Angular</li>
            </ul>
          </div>
          <div className="">
            <h1 className="mt-2">Contact</h1>
            <br />
            <ul>
              <li>New York, NY 10012, US</li>
              <li>MD WordPress</li>
              <li>BrandFlow</li>
              <li>Bootstrap Angular</li>
            </ul>
          </div>
        </div>
        <div className="  h-10 bg-purple-900 flex justify-center text-white">
          &copy;2025 Copyright: MDBootStrp
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
