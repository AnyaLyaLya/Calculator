import React, { FC } from 'react';
import './metamaskMessage.scss';

type Props = {
  closeModal: () => void;
}

export const MetamaskMessage: FC<Props> = ({ closeModal }) => (
  <div className="metamask-modal">
    <div className="metamask-modal__content">
      <div className="metamask-modal__header">
        <h3 className="metamask-modal__title">
          Please connect your wallet using Metamask to perform calculations
        </h3>

        <span className="metamask-modal__close-button" onClick={closeModal}>
          &times;
        </span>
      </div>
      
      <h4 className="metamask-modal__subtitle">Instructions:</h4>

      <ul className="metamask-modal__list">
        <li className="metamask-modal__list--item">Install the Metamask extension for your browser if you haven't already. You can download it from the official Metamask website.</li>
        <li className="metamask-modal__list--item">Once installed, click on the Metamask extension icon in your browser's toolbar.</li>
        <li className="metamask-modal__list--item">If you already have a Metamask account, click "Unlock" and enter your credentials. If you don't have an account, click "Create a Wallet" and follow the instructions to set up a new account.</li>
        <li className="metamask-modal__list--item">After unlocking or creating a wallet, make sure you are connected to the Ethereum Mainnet. You can switch networks by clicking on the network name at the top of the Metamask window and selecting "Ethereum Mainnet" from the dropdown menu.</li>
        <li className="metamask-modal__list--item">Return to this web page, and the calculator will be available for use.</li>
      </ul>

      <div className="metamask-modal__footer">
        <p className="metamask-modal__footer--text">
          If you need more detailed instructions, you can visit the{" "} 
            <a href="https://metamask.io" className="metamask-modal__footer--link">
              Metamask website
            </a> 
            {" "}for a step-by-step guide.
        </p>
      </div>
    </div>
  </div>
);