import React from 'react';
import "./message.css";
const marqueeStyle = {
    '--marquee-speed': '15s',
    '--direction': 'scroll-left'
  };

export default function message() {
  return (
    <>
    <div class="scrolling-text-container">
    <div class="scrolling-text-inner" style={marqueeStyle} role="marquee">
        <div class="scrolling-text">
            <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div>
            <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div>
            <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div>
            <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div>
            {/* <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div>
            <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div>
            <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div>
            <div class="scrolling-text-item">We are currently building the website.It will be updated soon.</div> */}
        </div>
    </div>
</div>
    </>

  )
}
