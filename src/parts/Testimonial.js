import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";

import Fade from "react-reveal/Fade";

export default function Testimonial({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 72 }}>
          <Fade left>
            <div
              className="testimonial-hero"
              style={{ margin: `32px 0 0 32px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial Hero"
                className="position-absolute"
              />
            </div>
          </Fade>
        </div>
        <div className="col">
          <Fade>
            <h4 style={{ marginBottom: 32 }}>{data.title}</h4>
            <Star value={data.rate} width={32} height={32} spacing={8} />
            <h4 className="h2">{data.content}</h4>
            <span className="text-gray-500">
              {data.username}, {data.useroccupation}
            </span>
            <div>
              <Button
                type="link"
                className="btn px-5"
                hasShadow
                isPrimary
                href={`/testimonial/${data._id}`}
                style={{ marginTop: 32 }}
              >
                Check Their Story
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
