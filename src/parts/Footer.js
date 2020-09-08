import React from "react";
import IconText from "./IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="tagline">Find a new work atmosphere</p>
            <p>
              (+62) 888 1234 1234
              <br />
              Jalan Jalanan No. 32
              <br />
              Jember, Jawa Timur, Indonesia
            </p>
          </div>
          <div className="col-3">
            <h5 className="mt-2">For Beginners</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about-us">
                  What is Workcapsule?
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/help">
                  Help & Support
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/faq">
                  FAQ
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h5 className="mt-2">About Us</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Career
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/blog">
                  Blog
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h5 className="mt-2">Our Social Media</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Facebook
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/blog">
                  Twitter
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  LinkedIn
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Instagram
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright © 2020 • All Rights Reserved • Workcapsule
          </div>
        </div>
      </div>
    </footer>
  );
}
