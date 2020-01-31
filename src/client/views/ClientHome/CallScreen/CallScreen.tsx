import React, { useState } from 'react';
import styles from './CallScreen.module.scss';
import { CallMember } from '../../../../shared/Interfaces';


interface CallTimeProps {
  time: string;
}

const CallTime = (props: CallTimeProps) => {
  return (
    <div className={styles.callTimeContainer}>
      <span>{props.time}</span>
    </div>
  );
}


interface MemberDetailsProps {
  name: string;
  location: string;
}

const MemberDetails = (props: MemberDetailsProps) => {
  return (
    <div className={styles.memberDetailsContainer}>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
    </div>
  );
}


const MeetingMember = (props: CallMember) => {
  return (
    <div className={styles.callMemberContainer}>
      <img src={props.photo} />
    </div>
  );
}


interface ControlButton {
  name: string;
  icon: string;
  action: Function;
  red?: boolean;
}

const ControlButton = (props: ControlButton) => {
  return (
    <div className={props.red ? styles.controlButtonContainerRed : styles.controlButtonContainer}>
      <img src={props.icon} />
      <span>{props.name}</span>
    </div>
  );
}


interface CallControlsProps {
  buttons: ControlButton[];
  position: string;
}

const CallControls = (props: CallControlsProps) => {
  return (
    <div className={props.position === 'center' ? styles.controlsContainer : styles.rightControlsContainer}>
      {props.buttons.map((b, i) => <ControlButton key={i} name={b.name} icon={b.icon} action={b.action} red={b.red} />)}
    </div>
  );
}


interface VideoBlogProps {
  videoUrl: string;
}

const VideoBlock = (props: VideoBlogProps) => {
  return (
    props.videoUrl ?
    <img src={props.videoUrl} alt="Meeting video" /> :
    <div className={styles.videoUnavailableContainer}>
      <h2>Video unavailable</h2>
    </div>
  );
}


interface CallScreenProps {
  meetingMembers: CallMember[];
}

export const CallScreen = (props: CallScreenProps) => {
  const meetingMembers = props.meetingMembers.map((m, i) => <MeetingMember key={i} photo={m.photo} name={m.name} />);

  return (
    <section className={styles.callScreenContainer}>
      <VideoBlock videoUrl="assets/img/alex.png" />

      <CallTime time="00:21:17" />

      <div className={styles.callMembersContainer}>
        {meetingMembers}
      </div>

      <MemberDetails name="Hangakore Hariwana" location="Washington D.C., USA" />

      <CallControls
        position="center"
        buttons={[
          {name: 'Mute', icon: 'assets/img/mic-white.svg', action: () => {}},
          {name: 'Video', icon: 'assets/img/video-call-white.svg', action: () => {}},
          {name: 'End call', icon: 'assets/img/voice-call-white.svg', action: () => {}, red: true},
          {name: 'Volume', icon: 'assets/img/voice-volume-3-white.svg', action: () => {}},
          {name: 'Share', icon: 'assets/img/share-screen-white.svg', action: () => {}}
        ]}
      />

      <CallControls
        position="right"
        buttons={[
          {name: 'Chat', icon: 'assets/img/chat-white.svg', action: () => {}},
          {name: 'Participants', icon: 'assets/img/participants-white.svg', action: () => {}},
          {name: 'Settings', icon: 'assets/img/settings-white.svg', action: () => {}}
        ]}
      />
    </section>
  );
}