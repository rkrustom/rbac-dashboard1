const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Example: Send data to an analytics service
const sendToAnalytics = ({ name, delta, id }) => {
  // Replace with your own analytics service
  console.log(`Web Vitals: ${name} - ${delta} (${id})`);
};

export default reportWebVitals;
