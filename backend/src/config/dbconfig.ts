import mongoose from 'mongoose';

export const dbConnect = () => {
  const URI = process.env.MONGODB_URI;
  if (!URI) return;
  const conn = mongoose.createConnection(URI);

  /* Listen to database events*/
  conn.on('error', (error: Error) => {
    console.log(`Failed to establish connection with database (${error})`);
  });

  conn.on('connected', () => {
    console.log('Connected');
  });

  conn.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });
};
