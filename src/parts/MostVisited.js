import React from "react";

import Button from "elements/Button";
import { priceFormat } from "utils/NumberFormat";

import Fade from "react-reveal/Fade";

export default function MostVisited(props) {
  return (
    <section className="container" ref={props.refMost}>
      <Fade>
        <h4 className="mb-3">Most Visited Places</h4>
      </Fade>

      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <Fade delay={240 * index}>
              <div
                key={`mostvisited-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <div className="card card-featured">
                  <div className="tag">
                    {priceFormat(item.price)}
                    <span className="font-weight-light"> per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img src={item.imageUrl} alt={item.name} />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="stretched-link d-block text-white"
                      href={`/${item.type}/${item._id}`}
                    >
                      <h5>{item.name}</h5>
                      <span>
                        {item.city}, {item.province}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}
