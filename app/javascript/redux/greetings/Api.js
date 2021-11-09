const apiGreetings = async () => {
  const request = await fetch('api/greetings.json');
  const response = await request.json();
  const greeting = await response.message;
  return greeting;
};

export default apiGreetings;
