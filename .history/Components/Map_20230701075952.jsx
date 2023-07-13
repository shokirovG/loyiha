import React from "react";

const Map = () => {
  return (
    <div className="mt-10">
      <p className="text-[#1D1D1F]">
        Каждая кухня работает со своей зоной доставки, чтобы привезти еду
        максимально быстро
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6208606.72630882!2d63.60678502500006!3d40.55161279105365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1688101336875!5m2!1sen!2s"
        width="100%"
        height="600"
        className="rounded-2xl"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
