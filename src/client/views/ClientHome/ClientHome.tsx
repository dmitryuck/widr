import React from 'react';
import styles from './ClientHome.module.scss';
import { LoadingScreen } from './LoadingScreen/LoadingScreen';
import { CallScreen } from './CallScreen/CallScreen';
import { CallMember } from '../../../shared/Interfaces';

interface State {
  isLoaded: boolean;
  meetingMembers: CallMember[];
}

interface Props {
}

export class ClientHomeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoaded: false,
      meetingMembers: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        meetingMembers: [
          {
            name: 'John',
            photo: 'assets/img/john.jpg'
          }
        ]
      });
    }, 5000);
  }

  render() {
    const { isLoaded, meetingMembers } = this.state;

    return (
      <section className={styles.pageContainer}>
        {!isLoaded ? <LoadingScreen /> : <CallScreen meetingMembers={meetingMembers} />}
      </section>
    );
  }
}

export const ClientHome = (ClientHomeComponent);
