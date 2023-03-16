import {IoLogoWhatsapp} from 'react-icons/io'

const WhatsappButton = () => {
    return (
      <a
        href="https://wa.link/zzislj"
        className="fixed bottom-8 right-8 z-10 flex items-center justify-center w-16 h-16 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
      >
        <IoLogoWhatsapp size={36} />
        {/* <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm3.54,15.47c-.18.36-1.06,1.38-1.23,1.53-.17.16-.34.13-.47-.09a.51.51,0,0,0-.79-.12c-.22.2-.59.55-.76.71-.17.16-.25.16-.42,0a12.6,12.6,0,0,1-2.12-2.09c-.19-.26-.3-.39-.54-.41s-.33.08-.58.44a6.56,6.56,0,0,1-2.22,1.65,6.16,6.16,0,0,1-2.77.6H4.43a.47.47,0,0,1-.47-.47V12.08a.47.47,0,0,1,.47-.47h1.52a8.49,8.49,0,0,0,4.25-1.1,4.76,4.76,0,0,0,1.79-2.64,5.22,5.22,0,0,0-.06-3.31,4.44,4.44,0,0,0-3.31-1.92H4.43a.47.47,0,0,1-.47-.47V4.87a.47.47,0,0,1,.47-.47h1.52A11.88,11.88,0,0,1,12,2.37a11.77,11.77,0,0,1,7.69,2.87A11.67,11.67,0,0,1,21.63,12a11.9,11.9,0,0,1-3.09,8.1A11.79,11.79,0,0,1,12,21.63Z"
          />
        </svg> */}
      </a>
    );
  };
  
  export default WhatsappButton;