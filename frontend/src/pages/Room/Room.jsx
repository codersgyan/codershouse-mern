import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useWebRTC } from '../../hooks/useWebRTC';
import { useParams } from 'react-router-dom';

import styles from './Room.module.css';

const Room = () => {
    const user = useSelector((state) => state.auth.user);
    const { id: roomId } = useParams();

    const { clients, provideRef } = useWebRTC(roomId, user);

    return (
        <div>
            <h2>All connected clients</h2>
            {clients.map((client) => {
                return (
                    <div className={styles.userHead} key={client.id}>
                        <img
                            className={styles.userAvatar}
                            src={client.avatar}
                            alt=""
                        />
                        <audio
                            autoPlay
                            playsInline
                            ref={(instance) => {
                                provideRef(instance, client.id);
                            }}
                        />
                        <h4>{client.name}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default Room;
