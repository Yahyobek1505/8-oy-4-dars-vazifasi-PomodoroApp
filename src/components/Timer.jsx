import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeDisplay = styled.div`
  font-size: 5rem;
  margin-bottom: 80px;
  margin-top: 50px;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  text-align: center;
  padding-top: 95px;
  border: 4px  solid skyblue;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #282c34;
`;

const Timer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <TimerContainer>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <ButtonGroup>
        <Button onClick={() => setIsActive(true)}>
          <FaPlay /> Start
        </Button>
        <Button onClick={() => setIsActive(false)}>
          <FaPause /> Pause
        </Button>
        <Button onClick={resetTimer}>
          <FaRedo /> Reset
        </Button>
      </ButtonGroup>
    </TimerContainer>
  );
};

export default Timer;
