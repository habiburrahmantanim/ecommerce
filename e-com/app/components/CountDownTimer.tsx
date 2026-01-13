"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2026-02-28T23:59:59");

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return
    <span className="text-xl font-bold text-white">Offer Expired</span>;
  }

  const Box = ({ value, label }) => (
    <div className="bg-indigo-800 px-6 py-4 rounded-lg text-center">
      <div className="text-3xl font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <Box value={days} label="Days" />
      <Box value={hours} label="Hours" />
      <Box value={minutes} label="Minutes" />
      <Box value={seconds} label="Seconds" />
    </div>
  );
};

const CountDownTimer = () => {
  return <Countdown date={endingDate} renderer={renderer} />;
};

export default CountDownTimer;
