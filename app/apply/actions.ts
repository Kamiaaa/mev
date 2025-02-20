// app/apply/actions.ts
'use server'; // Mark this as a Server Action

import connectDB from '@/lib/db';
import Application from '@/models/Application';
import fs from 'fs';
import path from 'path';

export async function submitApplication(formData: FormData) {
  try {
    await connectDB();

    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const cvFile = formData.get('cv') as File;

    // Save the file locally
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, cvFile.name);
    const fileBuffer = await cvFile.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(fileBuffer));

    // Save application data to MongoDB
    const application = new Application({
      name,
      email,
      phone,
      position,
      cv: `/uploads/${cvFile.name}`, // Use 'cv' instead of 'resume'
    });
    await application.save();

    return { success: true };
  } catch (error) {
    console.error('Failed to submit application:', error);
    return { success: false };
  }
}