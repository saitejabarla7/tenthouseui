// // // src/components/QRCodeScanner.js
// // import { useState } from 'react';
// // import QrReader from 'react-qr-reader';

// // const QRCodeScanner = () => {
// //   const [scanResult, setScanResult] = useState('');

// //   const handleScan = (data) => {
// //     if (data) {
// //       setScanResult(data);
// //       // You can process the scanned data here, e.g., fetch the product.
// //       console.log('Scanned Data:', data);
// //     }
// //   };

// //   const handleError = (error) => {
// //     console.error(error);
// //   };

// //   return (
// //     <div>
// //       <h2>Scan QR Code</h2>
// //       <QrReader
// //         delay={300}
// //         style={{ width: '100%' }}
// //         onError={handleError}
// //         onScan={handleScan}
// //       />
// //       {scanResult && <p>Scanned Result: {scanResult}</p>}
// //     </div>
// //   );
// // };

// // export default QRCodeScanner;

// // src/components/QRCodeScanner.js
// // import React, { useState } from 'react';
// // import QrReader from 'react-qr-code-reader';

// // const QRCodeScanner = () => {
// //   const [scanResult, setScanResult] = useState('');

// //   const handleScan = (data) => {
// //     if (data) {
// //       setScanResult(data);
// //       console.log('QR Code Data:', data);
// //     }
// //   };

// //   const handleError = (error) => {
// //     console.error(error);
// //   };

// //   return (
// //     <div>
// //       <h2>Scan QR Code</h2>
// //       <QrReader
// //         delay={300}
// //         style={{ width: '100%' }}
// //         onError={handleError}
// //         onScan={handleScan}
// //       />
// //       {scanResult && <p>Scanned Result: {scanResult}</p>}
// //     </div>
// //   );
// // };

// // export default QRCodeScanner;

// // src/components/QRCodeScanner.js
// import React, { useState } from 'react';
// import QrScanner from 'react-qr-scanner';

// const QRCodeScanner = () => {
//   const [scanResult, setScanResult] = useState('');

//   const handleScan = (data) => {
//     if (data) {
//       setScanResult(data);
//       console.log('QR Code Data:', data);
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//   };

//   return (
//     <div>
//       <h2>Scan QR Code</h2>
//       <QrScanner
//         delay={300}
//         style={{ width: '100%' }}
//         onError={handleError}
//         onScan={handleScan}
//       />
//       {scanResult && <p>Scanned Result: {scanResult}</p>}
//     </div>
//   );
// };

// export default QRCodeScanner;



import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';  // Correct import

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);

  // Callback when a QR code is scanned successfully
  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
      alert(`Scanned data: ${data}`);
    }
  };

  // Callback for error (optional)
  const handleError = (err) => {
    console.error('QR scan error: ', err);
  };

  return (
    <div>
      <h3>Scan QR Code</h3>
      <QrReader
        delay={300}
        style={{ width: '100%' }}
        onError={handleError}
        onScan={handleScan}
      />
      <div>
        {scannedData && <p>Scanned Data: {scannedData}</p>}
      </div>
    </div>
  );
};

export default QRCodeScanner;
