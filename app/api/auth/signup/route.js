import { NextResponse } from "next/server";
import connectDB from "@/lib/db"
import User from "@/models/User"
import bcrypt from 'bcryptjs';
import validator from 'validator';

export async function POST(req) {
    await connectDB();

    try {
        const { email, username, password} = await req.json();
        console.log(email, username, password)

        // Check if any field is empty
        if (!email || !username || !password) {
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
        }

        // Password validation
        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            return NextResponse.json({
                success: false,
                message: 'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.'
            }, { status: 400 });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            console.log(userExists)
            return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user with email in lowercase
        const lowercaseEmail = email.toLowerCase();

        const user = new User({
            email: lowercaseEmail,
            username,
            password: hashedPassword,
        });

        await user.save();

        return NextResponse.json({ success: true, message: 'Registration Successful' }, { status: 201 });


    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}
