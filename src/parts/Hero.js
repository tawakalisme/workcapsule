import React from "react";

import ImageHero from "assets/images/Hero.jpg";
import IconCoworking from "assets/icons/twotone/ic_baseline-corporate-fare.svg";
import IconBuilding from "assets/icons/twotone/mdi_home-city.svg";
import IconHall from "assets/icons/twotone/mdi_building.svg";

import Button from "elements/Button";
import { numberFormat } from "utils/NumberFormat.js";


export default function Hero(props) {
  function scrollToRef() {
    window.scrollTo(0, props.refMost.current.offsetTop - 32);
  }
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <h1 className="font-weight-bold line-height-3 mb-4">
            Need a Space
            <br />
            to Work?
          </h1>
          <p className="mb-4 font-weight-light text-gray-600 ">
            Work in the office might sound boring for some people. Maybe you
            prefer an office that not look like one. Well, we will save your day
            from a boring meeting or a broken coffee machine.
          </p>
          <Button
            type="button"
            className="btn px-5 mt-5"
            hasShadow
            isPrimary
            onClick={scrollToRef}
          >
            Show Me
          </Button>

          <div className="row mt-5">
            <div className="col-4">
              <img
                width="48"
                height="48"
                src={IconCoworking}
                alt="{`props.data.coworking} coworking spaces"
              />
              <h6 className="mt-3">
                {numberFormat(props.data.coworking)}
                <span className="text-gray-600 font-weight-light">
                  <br />
                  coworking
                  <br />
                  spaces
                </span>
              </h6>
            </div>

            <div className="col-4">
              <img
                width="48"
                height="48"
                src={IconBuilding}
                alt="{`props.data.coworking} coworking spaces"
              />
              <h6 className="mt-3">
                {numberFormat(props.data.hall)}
                <span className="text-gray-600 font-weight-light">
                  <br />
                  available
                  <br />
                  auditoriums
                </span>
              </h6>
            </div>

            <div className="col-4">
              <img
                width="48"
                height="48"
                src={IconHall}
                alt="{`props.data.auditorium} convention halls`}"
              />
              <h6 className="mt-3">
                {numberFormat(props.data.hall)}
                <span className="text-gray-600 font-weight-light">
                  <br />
                  available
                  <br />
                  convention hall
                </span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="image-hero">
            <img
              src={ImageHero}
              alt="{`props.data.hall} Hall Building`}"
              className="img-fluid position-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
