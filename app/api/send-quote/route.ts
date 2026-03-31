import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure your email settings
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, phone, email, serviceType, location, message } = formData;

    // Validate required fields
    if (!name || !phone || !email || !serviceType || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email content for admin
    const adminEmailContent = `
      <h2>New Quote Request from Pubali Enterprise Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No additional details provided"}</p>
      <hr />
      <p><small>Received at: ${new Date().toLocaleString()}</small></p>
    `;

    // Email content for customer
    const customerEmailContent = `
      <h2>Thank You for Your Quote Request!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for submitting your quote request to Pubali Enterprise. We have received your information and will get back to you within 24 hours with a detailed quote and timeline.</p>
      <hr />
      <h3>Your Request Details:</h3>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p>We'll contact you at: ${phone} or ${email}</p>
      <hr />
      <p>In the meantime, if you need immediate assistance, please don't hesitate to call us directly at +1 (234) 567-890 or WhatsApp: +1 (234) 567-890</p>
      <p>Best regards,<br />Pubali Enterprise Team</p>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || "info@pubalienterprises.com",
      subject: `New Quote Request: ${serviceType} - ${name}`,
      html: adminEmailContent,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Quote Request Received - Pubali Enterprise",
      html: customerEmailContent,
    });

    // TODO: Send to WhatsApp (implement with Twilio or similar service)
    // You can integrate WhatsApp API here

    return NextResponse.json(
      { success: true, message: "Quote request submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit quote request" },
      { status: 500 },
    );
  }
}
