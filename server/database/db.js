import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const Connection = async (username, password) => {
    const URL = `mongodb+srv://pankajlahre29:pankajlahre@cluster0.1ksgefm.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;