// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-light text-center text-lg-start">
//       <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2024 Rajeev Kumar: All rights reserved
//       </div>
//     </footer>
//   );
// }

// export default Footer;




import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>© 2024 Rajeev Kumar: All rights reserved</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '20px 0',
  textAlign: 'center',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

const contentStyle = {
  color: '#333',
  fontSize: '16px',
};

export default Footer;


