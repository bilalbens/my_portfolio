import { Flippy, FrontSide, BackSide } from 'react-flippy';
import React from 'react';

const ProfileCard = () => {
    return (
        <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" 
        style={{ marginTop: '6rem' }} 

      >
        <FrontSide 
          style={{
            backgroundColor: '#41669d',
            padding: 0
          }}
        >
          <img className="img-fluid" src="/images/profil/profil.jpg"/>
        </FrontSide>
        <BackSide
          style={{ backgroundColor: '#0099FF', padding: 0}}
          className="d-flex">
          <div className="align-self-center text-center">
            <h2 className="">Future Software Developer</h2>
          </div>
        </BackSide>
      </Flippy>    
    );
}

export default ProfileCard;

