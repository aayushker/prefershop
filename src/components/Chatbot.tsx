import React, { useEffect } from 'react';
declare global {
    interface Window {
        botpressWebChat: any;
    }
}
function Chatbot() {
  useEffect(() => {
    // Function to dynamically load the Botpress chatbot script
    const loadBotpressChatScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      script.async = true;
      script.onload = () => {
        // Initialize the chatbot once the script is loaded

        window.botpressWebChat.init({
          composerPlaceholder: 'Chat with PreferShop',
          botConversationDescription: 'Hola Amigo! How can I help you today?',
          botId: '69f03d93-47fb-4f42-b407-80c8e7e54ad9',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: '69f03d93-47fb-4f42-b407-80c8e7e54ad9',
          webhookId: 'b5baced0-2536-4110-94c6-a3a084c0a363',
          lazySocket: true,
          themeName: 'prism',
          botName: 'PreferShop Bot',
          avatarUrl: 'https://img.freepik.com/premium-vector/artificial-intelligence-ai-robot-chat-bot-logo-vector-template_8169-533.jpg',
          stylesheet: 'https://webchat-styler-css.botpress.app/prod/71ffe266-f619-4ca4-98ee-0c9aea273dee/v82060/style.css',
          frontendVersion: 'v1',
          useSessionStorage: true,
          theme: 'prism',
          themeColor: '#2563eb',
        });
      };
      document.body.appendChild(script);
    };

    // Call the function to load the script
    loadBotpressChatScript();

    // Optional: Cleanup function to remove the script when the component unmounts
    return () => {
      document.querySelectorAll('script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]').forEach(el => el.remove());
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return null; // This component does not render anything itself
}

export default Chatbot;