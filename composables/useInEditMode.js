export default () => {
  return process.client && window.location !== window.parent?.location;
};
